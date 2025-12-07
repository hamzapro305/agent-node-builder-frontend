import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const StartNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`px-4 py-3 rounded-xl border-2 bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl transition-all duration-200 ${selected ? 'border-white shadow-2xl shadow-emerald-500/50 scale-105' : 'border-emerald-400/50'
            }`}>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-white">
                    <div className="font-semibold text-sm">{data.label}</div>
                    <div className="text-xs text-emerald-100/80">Entry point</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !bg-emerald-300 !border-2 !border-white"
            />
        </div>
    );
});

StartNode.displayName = 'StartNode';
