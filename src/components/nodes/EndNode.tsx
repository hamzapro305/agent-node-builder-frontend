import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const EndNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`px-4 py-3 rounded-xl border-2 bg-gradient-to-br from-red-500 to-red-600 shadow-xl transition-all duration-200 ${selected ? 'border-white shadow-2xl shadow-red-500/50 scale-105' : 'border-red-400/50'
            }`}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ left: -6 }}
                className="!w-3 !h-3 !bg-red-300 !border-2 !border-white !z-50"
            />
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                </div>
                <div className="text-white">
                    <div className="font-semibold text-sm">{data.label}</div>
                    <div className="text-xs text-red-100/80">Exit point</div>
                </div>
            </div>
        </div>
    );
});

EndNode.displayName = 'EndNode';
