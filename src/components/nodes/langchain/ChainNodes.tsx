import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const LLMChainNode = memo(({ data, selected }: NodeProps) => {
    const [verbose, setVerbose] = useState(data.verbose || false);

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-purple-400 shadow-2xl shadow-purple-500/30 scale-105' : 'border-purple-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">⛓️</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">LLMChain</div>
                        <div className="text-xs text-purple-100/80">langchain.chains</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="llm" style={{ top: '30%', left: -6 }} className="!w-3 !h-3 !bg-orange-400 !border-2 !border-white !z-50" />
            <Handle type="target" position={Position.Left} id="prompt" style={{ top: '50%', left: -6 }} className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white !z-50" />
            <Handle type="target" position={Position.Left} id="memory" style={{ top: '70%', left: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">verbose</label>
                    <input type="checkbox" checked={verbose} onChange={(e) => setVerbose(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-purple-500 focus:ring-purple-500" />
                </div>
                <div className="text-[10px] text-zinc-500 space-y-1">
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> llm</div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400"></span> prompt</div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> memory (opt)</div>
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="output" style={{ right: -6 }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-purple-400">
                    Chain Output <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
            </div>
        </div>
    );
});

LLMChainNode.displayName = 'LLMChainNode';

export const SequentialChainNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-purple-400 shadow-2xl shadow-purple-500/30 scale-105' : 'border-purple-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔄</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">SequentialChain</div>
                        <div className="text-xs text-purple-100/80">langchain.chains</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="chains" style={{ left: -6 }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="text-xs text-zinc-400 italic">
                    Connect multiple chains in sequence
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="output" style={{ right: -6 }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-purple-400">
                    Chain Output <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
            </div>
        </div>
    );
});

SequentialChainNode.displayName = 'SequentialChainNode';
