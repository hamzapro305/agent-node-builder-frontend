import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

// Output Display Node - Show results to user
export const OutputDisplayNode = memo(({ data, selected }: NodeProps) => {
    const [format, setFormat] = useState(data.format || 'text');

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-green-400 shadow-2xl shadow-green-500/30 scale-105' : 'border-green-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📤</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Output Display</div>
                        <div className="text-xs text-green-100/80">Show result to user</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Display Format</label>
                    <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-green-500">
                        <option value="text">Plain Text</option>
                        <option value="markdown">Markdown</option>
                        <option value="html">HTML</option>
                        <option value="json">JSON</option>
                    </select>
                </div>
                <div className="text-xs text-zinc-500 bg-zinc-800/50 rounded p-2">
                    💡 Result will be displayed to the user in this format
                </div>
            </div>

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="text-xs text-green-400 text-center">✓ Final Output</div>
            </div>
        </div>
    );
});

OutputDisplayNode.displayName = 'OutputDisplayNode';


// Variable Node - Store and reuse data
export const VariableNode = memo(({ data, selected }: NodeProps) => {
    const [varName, setVarName] = useState(data.varName || 'myVariable');
    const [action, setAction] = useState(data.action || 'store');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-purple-400 shadow-2xl shadow-purple-500/30 scale-105' : 'border-purple-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">💾</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Variable</div>
                        <div className="text-xs text-purple-100/80">Store & reuse data</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Variable Name</label>
                    <input
                        type="text"
                        value={varName}
                        onChange={(e) => setVarName(e.target.value)}
                        placeholder="myVariable"
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500 font-mono"
                    />
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Action</label>
                    <select value={action} onChange={(e) => setAction(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500">
                        <option value="store">Store Value</option>
                        <option value="get">Get Value</option>
                        <option value="clear">Clear Value</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} style={{ right: -6 }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-purple-400">
                    Stored Data <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
            </div>
        </div>
    );
});

VariableNode.displayName = 'VariableNode';


// Text Merge Node - Combine texts
export const TextMergeNode = memo(({ data, selected }: NodeProps) => {
    const [separator, setSeparator] = useState(data.separator || ' ');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔗</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Text Merge</div>
                        <div className="text-xs text-cyan-100/80">Combine texts</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="text1" style={{ top: '35%', left: -6 }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white !z-50" />
            <Handle type="target" position={Position.Left} id="text2" style={{ top: '65%', left: -6 }} className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Separator</label>
                    <input
                        type="text"
                        value={separator}
                        onChange={(e) => setSeparator(e.target.value)}
                        placeholder=" "
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>
                <div className="text-[10px] text-zinc-500">
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        <span>Text 1</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span>Text 2</span>
                    </div>
                </div>
            </div>

            <Handle type="source" position={Position.Right} style={{ right: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    Merged Text <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
            </div>
        </div>
    );
});

TextMergeNode.displayName = 'TextMergeNode';


// Text Transform Node - Change case
export const TextTransformNode = memo(({ data, selected }: NodeProps) => {
    const [transform, setTransform] = useState(data.transform || 'uppercase');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">✨</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Text Transform</div>
                        <div className="text-xs text-cyan-100/80">Change text case</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Transform</label>
                    <select value={transform} onChange={(e) => setTransform(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="uppercase">UPPERCASE</option>
                        <option value="lowercase">lowercase</option>
                        <option value="titlecase">Title Case</option>
                        <option value="sentence">Sentence case</option>
                        <option value="trim">Trim Spaces</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} style={{ right: -6 }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Transformed <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

TextTransformNode.displayName = 'TextTransformNode';


// Condition Node - Simple text checking
export const ConditionNode = memo(({ data, selected }: NodeProps) => {
    const [checkType, setCheckType] = useState(data.checkType || 'contains');
    const [checkValue, setCheckValue] = useState(data.checkValue || '');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-amber-500/10 to-orange-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-amber-400 shadow-2xl shadow-amber-500/30 scale-105' : 'border-amber-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔍</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Condition</div>
                        <div className="text-xs text-amber-100/80">Check text content</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} style={{ left: -6 }} className="!w-3 !h-3 !bg-amber-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Check Type</label>
                    <select value={checkType} onChange={(e) => setCheckType(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-amber-500">
                        <option value="contains">Contains</option>
                        <option value="equals">Equals</option>
                        <option value="startswith">Starts With</option>
                        <option value="endswith">Ends With</option>
                        <option value="isempty">Is Empty</option>
                    </select>
                </div>
                {checkType !== 'isempty' && (
                    <div>
                        <label className="text-xs font-medium text-zinc-400 mb-1 block">Check Value</label>
                        <input
                            type="text"
                            value={checkValue}
                            onChange={(e) => setCheckValue(e.target.value)}
                            placeholder="value to check"
                            className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                    </div>
                )}
            </div>

            <Handle type="source" position={Position.Right} id="true" style={{ top: '35%', right: -6 }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white !z-50" />
            <Handle type="source" position={Position.Right} id="false" style={{ top: '65%', right: -6 }} className="!w-3 !h-3 !bg-red-400 !border-2 !border-white !z-50" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    True <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
                <div className="flex items-center justify-end gap-1 text-xs text-red-400">
                    False <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                </div>
            </div>
        </div>
    );
});

ConditionNode.displayName = 'ConditionNode';
