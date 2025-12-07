import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const DecisionNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`px-4 py-3 rounded-xl border-2 bg-gradient-to-br from-amber-500 to-amber-600 shadow-xl transition-all duration-200 ${selected ? 'border-white shadow-2xl shadow-amber-500/50 scale-105' : 'border-amber-400/50'
            }`}>
            <Handle
                type="target"
                position={Position.Left}
                className="!w-3 !h-3 !bg-amber-300 !border-2 !border-white"
            />
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-white">
                    <div className="font-semibold text-sm">{data.label}</div>
                    <div className="text-xs text-amber-100/80">Condition</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="true"
                className="!w-3 !h-3 !bg-amber-300 !border-2 !border-white !top-[30%]"
            />
            <Handle
                type="source"
                position={Position.Right}
                id="false"
                className="!w-3 !h-3 !bg-amber-300 !border-2 !border-white !top-[70%]"
            />
        </div>
    );
});

DecisionNode.displayName = 'DecisionNode';
