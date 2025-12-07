import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const StringParserNode = memo(({ data, selected }: NodeProps) => {
    const [parserType, setParserType] = useState(data.parserType || 'split');
    const [delimiter, setDelimiter] = useState(data.delimiter || ',');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📄</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">String Parser</div>
                        <div className="text-xs text-cyan-100/80">Parse & extract strings</div>
                    </div>
                </div>
            </div>

            {/* Input Handle */}
            <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white"
            />

            {/* Body */}
            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                {/* Parser Type */}
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">
                        Parser Type
                    </label>
                    <select
                        value={parserType}
                        onChange={(e) => setParserType(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                    >
                        <option value="split">Split</option>
                        <option value="trim">Trim</option>
                        <option value="slice">Slice</option>
                        <option value="extract">Extract</option>
                    </select>
                </div>

                {/* Delimiter */}
                {parserType === 'split' && (
                    <div>
                        <label className="text-xs font-medium text-zinc-400 mb-1 block">
                            Delimiter
                        </label>
                        <input
                            type="text"
                            value={delimiter}
                            onChange={(e) => setDelimiter(e.target.value)}
                            placeholder=","
                            className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                    </div>
                )}
            </div>

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                id="output"
                className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white"
            />

            {/* Footer */}
            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Parsed Result
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

StringParserNode.displayName = 'StringParserNode';
