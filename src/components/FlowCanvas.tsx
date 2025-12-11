'use client';

import { useCallback, useRef, useState, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    addEdge,
    BackgroundVariant,
    type OnConnect,
    type Node,
    type Edge,
    type NodeMouseHandler,
    type NodeTypes,
    type ReactFlowInstance,
    type NodeChange,
    type EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNode,
    addNode,
    deleteNode
} from '@/store/flowSlice';
import {
    StartNode,
    EndNode,
    OutputDisplayNode,
    TextInputNode,
    ChatOpenAINode,
    PromptTemplateNode,
    ChatPromptTemplateNode,
    LLMChainNode,
    SequentialChainNode,
    ConversationBufferMemoryNode,
    StrOutputParserNode,
    StructuredOutputParserNode,
} from './nodes';

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'start',
        data: { label: 'Start' },
        position: { x: 100, y: 150 },
    },
];

const initialEdges: Edge[] = [];

let id = 2;
const getId = () => `node_${id++}`;

export default function FlowCanvas() {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    // Redux State
    const nodes = useSelector((state: RootState) => state.flow.nodes);
    const edges = useSelector((state: RootState) => state.flow.edges);

    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

    const nodeTypes: NodeTypes = useMemo(
        () => ({
            start: StartNode,
            end: EndNode,
            outputdisplay: OutputDisplayNode,
            textinput: TextInputNode,
            chatopenai: ChatOpenAINode,
            prompttemplate: PromptTemplateNode,
            chatprompttemplate: ChatPromptTemplateNode,
            llmchain: LLMChainNode,
            sequentialchain: SequentialChainNode,
            conversationbuffermemory: ConversationBufferMemoryNode,
            stroutputparser: StrOutputParserNode,
            structuredoutputparser: StructuredOutputParserNode,
        }),
        []
    );

    // Callbacks
    const onNodesChangeCallback = useCallback(
        (changes: NodeChange[]) => dispatch(onNodesChange(changes)),
        [dispatch]
    );

    const onEdgesChangeCallback = useCallback(
        (changes: EdgeChange[]) => dispatch(onEdgesChange(changes)),
        [dispatch]
    );

    const onConnectCallback: OnConnect = useCallback(
        (connection) => dispatch(onConnect(connection)),
        [dispatch]
    );

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        dispatch(setSelectedNode(node));
    }, [dispatch]);

    const onPaneClick = useCallback(() => {
        dispatch(setSelectedNode(null));
    }, [dispatch]);

    // Drag & Drop
    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            const label = event.dataTransfer.getData('label');

            if (typeof type === 'undefined' || !type || !reactFlowInstance) {
                return;
            }

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: getId(),
                type,
                position,
                data: { label: label || type },
            };

            dispatch(addNode(newNode));
        },
        [reactFlowInstance, dispatch]
    );

    const onNodeContextMenu: NodeMouseHandler = useCallback(
        (event, node) => {
            event.preventDefault();
            dispatch(deleteNode(node.id));
        },
        [dispatch]
    );

    return (
        <div ref={reactFlowWrapper} className="h-full w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChangeCallback}
                onEdgesChange={onEdgesChangeCallback}
                onConnect={onConnectCallback}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeContextMenu={onNodeContextMenu}
                nodeTypes={nodeTypes}

                className="bg-zinc-900"
                defaultEdgeOptions={{
                    style: { stroke: '#818cf8', strokeWidth: 2 },
                    animated: true,
                }}
                proOptions={{ hideAttribution: true }}
            >

                <Background
                    variant={BackgroundVariant.Dots}
                    gap={16}
                    size={1}
                    className="!bg-zinc-900"
                    color="#8f8f8fff"
                />
            </ReactFlow>
        </div>
    );
}
