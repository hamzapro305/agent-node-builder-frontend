import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const ArrayManipulationNode = memo(({ data, selected }: NodeProps) => {
    const [operation, setOperation] = useState(data.operation || 'map');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📋</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Array Manipulation</div>
                        <div className="text-xs text-cyan-100/80">Transform arrays</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Operation</label>
                    <select value={operation} onChange={(e) => setOperation(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="map">Map</option>
                        <option value="filter">Filter</option>
                        <option value="reduce">Reduce</option>
                        <option value="sort">Sort</option>
                        <option value="reverse">Reverse</option>
                        <option value="slice">Slice</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Modified Array <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

ArrayManipulationNode.displayName = 'ArrayManipulationNode';


export const DateTimeParserNode = memo(({ data, selected }: NodeProps) => {
    const [inputFormat, setInputFormat] = useState(data.inputFormat || 'ISO');
    const [outputFormat, setOutputFormat] = useState(data.outputFormat || 'ISO');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📅</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">DateTime Parser</div>
                        <div className="text-xs text-cyan-100/80">Parse & format dates</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Input Format</label>
                    <select value={inputFormat} onChange={(e) => setInputFormat(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="ISO">ISO 8601</option>
                        <option value="unix">Unix Timestamp</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Output Format</label>
                    <select value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="ISO">ISO 8601</option>
                        <option value="unix">Unix Timestamp</option>
                        <option value="readable">Human Readable</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Formatted Date <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

DateTimeParserNode.displayName = 'DateTimeParserNode';


export const TemplateRendererNode = memo(({ data, selected }: NodeProps) => {
    const [syntax, setSyntax] = useState(data.syntax || 'handlebars');

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🎨</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Template Renderer</div>
                        <div className="text-xs text-cyan-100/80">Render templates</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="template" style={{ top: '35%' }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white" />
            <Handle type="target" position={Position.Left} id="data" style={{ top: '65%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block">Syntax</label>
                    <select value={syntax} onChange={(e) => setSyntax(e.target.value)} className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="handlebars">Handlebars</option>
                        <option value="mustache">Mustache</option>
                        <option value="jinja">Jinja2</option>
                        <option value="ejs">EJS</option>
                    </select>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    Rendered Output <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
            </div>
        </div>
    );
});

TemplateRendererNode.displayName = 'TemplateRendererNode';


export const MarkdownToTextNode = memo(({ data, selected }: NodeProps) => {
    const [stripLinks, setStripLinks] = useState(data.stripLinks !== false);
    const [keepFormatting, setKeepFormatting] = useState(data.keepFormatting || false);

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">📝</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">Markdown to Text</div>
                        <div className="text-xs text-cyan-100/80">Convert markdown</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">Strip Links</label>
                    <input type="checkbox" checked={stripLinks} onChange={(e) => setStripLinks(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500" />
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">Keep Formatting</label>
                    <input type="checkbox" checked={keepFormatting} onChange={(e) => setKeepFormatting(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="flex items-center justify-end gap-1 text-xs text-cyan-400">
                    Plain Text <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
            </div>
        </div>
    );
});

MarkdownToTextNode.displayName = 'MarkdownToTextNode';


export const JSONSchemaValidatorNode = memo(({ data, selected }: NodeProps) => {
    const [strictMode, setStrictMode] = useState(data.strictMode !== false);

    return (
        <div className={`min-w-[260px] rounded-xl border-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105' : 'border-cyan-500/30'
            }`}>
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">✅</span>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">JSON Validator</div>
                        <div className="text-xs text-cyan-100/80">Validate schemas</div>
                    </div>
                </div>
            </div>

            <Handle type="target" position={Position.Left} id="data" style={{ top: '35%' }} className="!w-3 !h-3 !bg-cyan-400 !border-2 !border-white" />
            <Handle type="target" position={Position.Left} id="schema" style={{ top: '65%' }} className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white" />

            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-400">Strict Mode</label>
                    <input type="checkbox" checked={strictMode} onChange={(e) => setStrictMode(e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500" />
                </div>
            </div>

            <Handle type="source" position={Position.Right} id="valid" style={{ top: '35%' }} className="!w-3 !h-3 !bg-green-400 !border-2 !border-white" />
            <Handle type="source" position={Position.Right} id="errors" style={{ top: '65%' }} className="!w-3 !h-3 !bg-red-400 !border-2 !border-white" />

            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-end gap-1 text-xs text-green-400">
                    Valid <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
                <div className="flex items-center justify-end gap-1 text-xs text-red-400">
                    Errors <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                </div>
            </div>
        </div>
    );
});

JSONSchemaValidatorNode.displayName = 'JSONSchemaValidatorNode';
