import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const JSONParserNode = memo(({ data, selected }: NodeProps) => {
    const [prettyPrint, setPrettyPrint] = useState(data.prettyPrint || false);
    const [strictMode, setStrictMode] = useState(data.strictMode || true);

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📦</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">JSON Parser</div>
                        <div className="text-xs text-cyan-100/80">Parse JSON strings</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">Pretty Print</label>
                    <input type="checkbox" checked={prettyPrint} onChange={(e) => setPrettyPrint(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">Strict Mode</label>
                    <input type="checkbox" checked={strictMode} onChange={(e) => setStrictMode(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="object" style={{ top: '35%' }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white" />
            <Handle type="source" position={Position.Right} id="errors" style={{ top: '65%' }} className="!w-3 !h-3 !bg-red-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    Parsed Object <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
                <div className="flex items-center justify-end gap-1 text-xs text-red-400">
                    Errors <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                </div>
            </div>
        </div>
    );
});

JSONParserNode.displayName = 'JSONParserNode';
