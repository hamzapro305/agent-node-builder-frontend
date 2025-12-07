import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const StructuredOutputParserNode = memo(({ data, selected }: NodeProps) => {
    const [schema, setSchema] = useState(data.schema || '{\n  "restaurant_name": "string",\n  "menu_items": "array of strings"\n}');

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-pink-400 shadow-2xl shadow-pink-500/30 scale-105' : 'border-pink-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🛠️</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">StructuredOutputParser</div>
                        <div className="text-xs text-pink-100/80">langchain.output_parsers</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-pink-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Schema Definition (JSON)</label>
                    <textarea
                        value={schema}
                        onChange={(e) => setSchema(e.target.value)}
                        rows={5}
                        placeholder='{"field": "description"}'
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-pink-500 font-mono resize-none"
                    />
                    <div className="text-[10px] text-zinc-500 mt-1">
                        Define the structure you want the LLM to return.
                    </div>
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="format_instructions" style={{ top: '30%', right: -6 }} className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white !z-50" />
            <Handle type="source" position={Position.Right} id="parser" style={{ top: '70%', right: -6 }} className="!w-3 !h-3 !bg-pink-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-blue-400">
                    Format Instructions <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
                <div className="flex items-center justify-end gap-1 text-xs text-pink-400">
                    Parser <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                </div>
            </div>
        </div>
    );
});

StructuredOutputParserNode.displayName = 'StructuredOutputParserNode';

export const StrOutputParserNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-pink-400 shadow-2xl shadow-pink-500/30 scale-105' : 'border-pink-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📄</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">StrOutputParser</div>
                        <div className="text-xs text-pink-100/80">langchain.schema.output_parser</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-pink-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="text-xs text-zinc-400">
                    Parses output to a string.
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="output" style={{ right: -6 }} className="!w-3 !h-3 !bg-pink-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-pink-400">
                    String <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                </div>
            </div>
        </div>
    );
});

StrOutputParserNode.displayName = 'StrOutputParserNode';
