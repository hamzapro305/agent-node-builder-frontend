import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const PromptTemplateNode = memo(({ data, selected }: NodeProps) => {
    const [template, setTemplate] = useState(data.template || 'Tell me a joke about {topic}');
    const [inputVariables, setInputVariables] = useState(data.input_variables || 'topic');

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-blue-400 shadow-2xl shadow-blue-500/30 scale-105' : 'border-blue-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📝</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">PromptTemplate</div>
                        <div className="text-xs text-blue-100/80">langchain.prompts</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="variables" className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">template</label>
                    <textarea
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        rows={3}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    />
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">input_variables</label>
                    <input
                        type="text"
                        value={inputVariables}
                        onChange={(e) => setInputVariables(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="prompt" className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-blue-400">
                    BasePromptTemplate <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
            </div>
        </div>
    );
});

PromptTemplateNode.displayName = 'PromptTemplateNode';

export const ChatPromptTemplateNode = memo(({ data, selected }: NodeProps) => {
    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-blue-400 shadow-2xl shadow-blue-500/30 scale-105' : 'border-blue-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">💬</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">ChatPromptTemplate</div>
                        <div className="text-xs text-blue-100/80">langchain.prompts</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="messages" className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="text-xs text-zinc-400 italic">
                    Connect SystemMessage and HumanMessage nodes
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="prompt" className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-blue-400">
                    BaseChatPromptTemplate <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
            </div>
        </div>
    );
});

ChatPromptTemplateNode.displayName = 'ChatPromptTemplateNode';
