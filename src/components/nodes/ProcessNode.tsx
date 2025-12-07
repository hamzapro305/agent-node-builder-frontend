import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const ProcessNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`px-4 py-3 rounded-xl border-2 bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl transition-all duration-200 ${selected ? 'border-white shadow-2xl shadow-blue-500/50 scale-105' : 'border-blue-400/50'
            }`}>
            <Handle
                type="target"
                position={Position.Left}
                className="!w-3 !h-3 !bg-blue-300 !border-2 !border-white"
            />
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className="text-white">
                    <div className="font-semibold text-sm">{data.label}</div>
                    <div className="text-xs text-blue-100/80">Processing</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !bg-blue-300 !border-2 !border-white"
            />
        </div>
    );
});

ProcessNode.displayName = 'ProcessNode';
