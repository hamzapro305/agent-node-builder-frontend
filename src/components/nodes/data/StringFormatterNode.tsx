import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const StringFormatterNode = memo(({ data, selected }: NodeProps) => {
    const [template, setTemplate] = useState(data.template || '{value}');
    const [caseTransform, setCaseTransform] = useState(data.caseTransform || 'none');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔤</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">String Formatter</div>
                        <div className="text-xs text-cyan-100/80">Format with templates</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="template" style={{ top: '35%' }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white" />
            <Handle type="target" position={Position.Left} id="data" style={{ top: '65%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Template</label>
                    <input
                        type="text"
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        placeholder="{value}"
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Case Transform</label>
                    <select value={caseTransform} onChange={(e) => setCaseTransform(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="none">None</option>
                        <option value="uppercase">UPPERCASE</option>
                        <option value="lowercase">lowercase</option>
                        <option value="titlecase">Title Case</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Formatted String <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

StringFormatterNode.displayName = 'StringFormatterNode';
