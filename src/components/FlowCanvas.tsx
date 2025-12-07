'use client';

import { useCallback, useRef, useState, useMemo } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
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
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
    StartNode,
    EndNode,
    OpenAINode,
    TextInputNode,
    StringFormatterNode,
    JSONParserNode,
    PromptTemplateNode,
    OutputDisplayNode,
    VariableNode,
    TextMergeNode,
    TextTransformNode,
    ConditionNode,
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
    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

    const nodeTypes: NodeTypes = useMemo(
        () => ({
            start: StartNode,
            end: EndNode,
            openai: OpenAINode,
            textinput: TextInputNode,
            prompttemplate: PromptTemplateNode,
            outputdisplay: OutputDisplayNode,
            variable: VariableNode,
            textmerge: TextMergeNode,
            texttransform: TextTransformNode,
            condition: ConditionNode,
            stringformatter: StringFormatterNode,
            jsonparser: JSONParserNode,
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
                <Controls className="!bg-zinc-800/90 !backdrop-blur-sm !border-zinc-700 [&>button]:!bg-zinc-900/90 [&>button]:!border-zinc-700 [&>button]:!text-zinc-300 [&>button:hover]:!bg-zinc-700 [&>button:hover]:!scale-110 [&>button]:!transition-all" />
                <MiniMap
                    className="!bg-zinc-800/90 !backdrop-blur-sm !border-zinc-700 !rounded-lg"
                    nodeColor={(node) => {
                        const colorMap: Record<string, string> = {
                            start: '#10b981',
                            process: '#3b82f6',
                            decision: '#f59e0b',
                            end: '#ef4444',
                            custom: '#6366f1',
                        };
                        return colorMap[node.type || 'custom'] || '#6366f1';
                    }}
                    maskColor="rgba(0, 0, 0, 0.6)"
                />
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={16}
                    size={1}
                    className="!bg-zinc-900"
                    color="#27272a"
                />
            </ReactFlow>
        </div>
    );
}
