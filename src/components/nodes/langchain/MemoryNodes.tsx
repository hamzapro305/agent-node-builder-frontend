import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const ConversationBufferMemoryNode = memo(({ data, selected }: NodeProps) => {
    const [memoryKey, setMemoryKey] = useState(data.memory_key || 'history');
    const [returnMessages, setReturnMessages] = useState(data.return_messages || true);

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-green-400 shadow-2xl shadow-green-500/30 scale-105' : 'border-green-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🧠</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">ConversationBufferMemory</div>
                        <div className="text-xs text-green-100/80">langchain.memory</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">memory_key</label>
                    <input
                        type="text"
                        value={memoryKey}
                        onChange={(e) => setMemoryKey(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">return_messages</label>
                    <input type="checkbox" checked={returnMessages} onChange={(e) => setReturnMessages(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-green-500 focus:ring-green-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="memory" style={{ right: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    BaseMemory <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
            </div>
        </div>
    );
});

ConversationBufferMemoryNode.displayName = 'ConversationBufferMemoryNode';
