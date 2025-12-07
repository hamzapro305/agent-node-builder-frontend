import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const CustomNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`px-4 py-3 rounded-xl border-2 bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-xl transition-all duration-200 ${selected ? 'border-white shadow-2xl shadow-indigo-500/50 scale-105' : 'border-indigo-400/50'
            }`}>
            <Handle
                type="target"
                position={Position.Left}
                className="!w-3 !h-3 !bg-indigo-300 !border-2 !border-white"
            />
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div className="text-white">
                    <div className="font-semibold text-sm">{data.label}</div>
                    <div className="text-xs text-indigo-100/80">Custom node</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !bg-indigo-300 !border-2 !border-white"
            />
        </div>
    );
});

CustomNode.displayName = 'CustomNode';
