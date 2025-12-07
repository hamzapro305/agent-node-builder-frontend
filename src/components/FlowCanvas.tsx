'use client';

import { useCallback, useRef, useState, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    BackgroundVariant,
    type OnConnect,
    type Node,
    type Edge,
    type NodeMouseHandler,
    type NodeTypes,
    type ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';
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
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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

    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

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

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, setNodes]
    );

    const onNodeContextMenu: NodeMouseHandler = useCallback(
        (event, node) => {
            event.preventDefault();
            setNodes((nds) => nds.filter((n) => n.id !== node.id));
            setEdges((eds) => eds.filter((e) => e.source !== node.id && e.target !== node.id));
        },
        [setNodes, setEdges]
    );

    return (
        <div ref={reactFlowWrapper} className="h-full w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeContextMenu={onNodeContextMenu}
                nodeTypes={nodeTypes}
                fitView
                className="bg-zinc-900"
                defaultEdgeOptions={{
                    style: { stroke: '#818cf8', strokeWidth: 2 },
                    animated: true,
                }}
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
