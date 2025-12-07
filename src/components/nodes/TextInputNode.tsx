import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const TextInputNode = memo(({ data, selected }: NodeProps) => {
    const [text, setText] = useState(data.text || '');

    return (
        <div className={`min-w-[240px] rounded-xl border-2 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-blue-400 shadow-2xl shadow-blue-500/30 scale-105' : 'border-blue-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Text Input</div>
                        <div className="text-xs text-blue-100/80">User Input</div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here..."
                    rows={4}
                    className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
            </div>

            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white"
            />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-blue-400">
                    Output Text
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
            </div>
        </div>
    );
});

TextInputNode.displayName = 'TextInputNode';
