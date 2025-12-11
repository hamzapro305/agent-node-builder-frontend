import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Edge,
    Node,
    NodeChange,
    EdgeChange,
    Connection,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';


const initialNodes: Node[] = [
    {
        id: '1',
        type: 'start',
        data: { label: 'Start' },
        position: { x: 100, y: 150 },
    },
];

const initialEdges: Edge[] = [];

interface FlowState {
    nodes: Node[];
    edges: Edge[];
    selectedNode: Node | null;
    isRightSidebarOpen: boolean;
}

const initialState: FlowState = {
    nodes: initialNodes,
    edges: initialEdges,
    selectedNode: null,
    isRightSidebarOpen: false,
};

const flowSlice = createSlice({
    name: 'flow',
    initialState,
    reducers: {
        setNodes: (state, action: PayloadAction<Node[]>) => {
            state.nodes = action.payload;
        },
        setEdges: (state, action: PayloadAction<Edge[]>) => {
            state.edges = action.payload;
        },
        onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },
        onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        onConnect: (state, action: PayloadAction<Connection>) => {
            state.edges = addEdge(action.payload, state.edges);
        },
        setSelectedNode: (state, action: PayloadAction<Node | null>) => {
            state.selectedNode = action.payload;
            if (action.payload) {
                state.isRightSidebarOpen = true;
            }
        },
        setRightSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isRightSidebarOpen = action.payload;
        },
        addNode: (state, action: PayloadAction<Node>) => {
            state.nodes.push(action.payload);
        },
        deleteNode: (state, action: PayloadAction<string>) => {
            state.nodes = state.nodes.filter((node) => node.id !== action.payload);
            state.edges = state.edges.filter((edge) => edge.source !== action.payload && edge.target !== action.payload);
            if (state.selectedNode?.id === action.payload) {
                state.selectedNode = null;
            }
        },
    },
});

export const {
    setNodes,
    setEdges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNode,
    setRightSidebarOpen,
    addNode,
    deleteNode,
} = flowSlice.actions;

export default flowSlice.reducer;
