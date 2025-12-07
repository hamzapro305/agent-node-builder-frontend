import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const ChatOpenAINode = memo(({ data, selected }: NodeProps) => {
    const [modelName, setModelName] = useState(data.model_name || 'gpt-4');
    const [temperature, setTemperature] = useState(data.temperature || 0.7);

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-orange-400 shadow-2xl shadow-orange-500/30 scale-105' : 'border-orange-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🦜</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">ChatOpenAI</div>
                        <div className="text-xs text-orange-100/80">langchain.chat_models</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="prompt" style={{ left: -6 }} className="!w-3 !h-3 !bg-orange-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">model_name</label>
                    <select value={modelName} onChange={(e) => setModelName(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-orange-500">
                        <option value="gpt-4">gpt-4</option>
                        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                        <option value="gpt-4-turbo">gpt-4-turbo</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">temperature: {temperature}</label>
                    <input type="range" min="0" max="2" step="0.1" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} className="w-full accent-orange-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="llm" style={{ right: -6 }} className="!w-3 !h-3 !bg-orange-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-orange-400">
                    BaseLanguageModel <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                </div>
            </div>
        </div>
    );
});

ChatOpenAINode.displayName = 'ChatOpenAINode';
