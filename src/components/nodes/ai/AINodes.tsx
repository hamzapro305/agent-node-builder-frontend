import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

// EmbeddingNode
export const EmbeddingNode = memo(({ data, selected }: NodeProps) => {
    const [model, setModel] = useState(data.model || 'text-embedding-3-small');
    const [dimensions, setDimensions] = useState(data.dimensions || 1536);

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🧬</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Embedding</div>
                        <div className="text-xs text-emerald-100/80">Generate embeddings</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Model</label>
                    <select value={model} onChange={(e) => setModel(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="text-embedding-3-small">text-embedding-3-small</option>
                        <option value="text-embedding-3-large">text-embedding-3-large</option>
                        <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Dimensions</label>
                    <input type="number" value={dimensions} onChange={(e) => setDimensions(Number(e.target.value))} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="vector" style={{ top: '35%' }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white" />
            <Handle type="source" position={Position.Right} id="dims" style={{ top: '65%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-purple-400">Vector <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span></div>
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">Dimensions <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span></div>
            </div>
        </div>
    );
});

EmbeddingNode.displayName = 'EmbeddingNode';


// VectorSearchNode
export const VectorSearchNode = memo(({ data, selected }: NodeProps) => {
    const [topK, setTopK] = useState(data.topK || 5);
    const [threshold, setThreshold] = useState(data.threshold || 0.7);

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔎</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Vector Search</div>
                        <div className="text-xs text-emerald-100/80">Search embeddings</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="query" style={{ top: '35%' }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white" />
            <Handle type="target" position={Position.Left} id="db" style={{ top: '65%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Top K</label>
                    <input type="number" value={topK} onChange={(e) => setTopK(Number(e.target.value))} min="1" className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Threshold</label>
                    <input type="number" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} step="0.1" min="0" max="1" className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="matches" style={{ top: '35%' }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white" />
            <Handle type="source" position={Position.Right} id="scores" style={{ top: '65%' }} className="!w-3 !h-3 !bg-amber-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">Top Matches <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span></div>
                <div className="flex items-center justify-end gap-1 text-xs text-amber-400">Scores <span className="w-1. 5 h-1.5 rounded-full bg-amber-400"></span></div>
            </div>
        </div>
    );
});

VectorSearchNode.displayName = 'VectorSearchNode';


// MemoryNode
export const MemoryNode = memo(({ data, selected }: NodeProps) => {
    const [maxMessages, setMaxMessages] = useState(data.maxMessages || 10);
    const [summaryMode, setSummaryMode] = useState(data.summaryMode || 'none');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">💾</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Memory</div>
                        <div className="text-xs text-emerald-100/80">Store context</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Max Messages</label>
                    <input type="number" value={maxMessages} onChange={(e) => setMaxMessages(Number(e.target.value))} min="1" className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Summary Mode</label>
                    <select value={summaryMode} onChange={(e) => setSummaryMode(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="none">None</option>
                        <option value="auto">Auto</option>
                        <option value="manual">Manual</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="history" style={{ top: '35%' }} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />
            <Handle type="source" position={Position.Right} id="summary" style={{ top: '65%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-emerald-400">History <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span></div>
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">Summary <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span></div>
            </div>
        </div>
    );
});

MemoryNode.displayName = 'MemoryNode';


// PromptTemplateNode
export const PromptTemplateNode = memo(({ data, selected }: NodeProps) => {
    const [template, setTemplate] = useState(data.template || '');

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📋</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Prompt Template</div>
                        <div className="text-xs text-emerald-100/80">Structured prompts</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Template</label>
                    <textarea
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        placeholder="You are a helpful assistant..."
                        rows={3}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                    />
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-emerald-400">
                    Rendered Prompt <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
            </div>
        </div>
    );
});

PromptTemplateNode.displayName = 'PromptTemplateNode';


// LLMSwitchNode
export const LLMSwitchNode = memo(({ data, selected }: NodeProps) => {
    const [switchLogic, setSwitchLogic] = useState(data.switchLogic || 'cost');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔀</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">LLM Switch</div>
                        <div className="text-xs text-emerald-100/80">Model switching</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="prompt" style={{ top: '35%' }} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />
            <Handle type="target" position={Position.Left} id="condition" style={{ top: '65%' }} className="!w-3 !h-3 !bg-amber-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Switch Logic</label>
                    <select value={switchLogic} onChange={(e) => setSwitchLogic(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="cost">Cost Optimized</option>
                        <option value="quality">Quality First</option>
                        <option value="speed">Speed First</option>
                        <option value="custom">Custom Logic</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-emerald-400">
                    LLM Output <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
            </div>
        </div>
    );
});

LLMSwitchNode.displayName = 'LLMSwitchNode';
