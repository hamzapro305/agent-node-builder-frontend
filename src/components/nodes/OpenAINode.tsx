import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export const OpenAINode = memo(({ data, selected }: NodeProps) => {
    const [apiKey, setApiKey] = useState(data.apiKey || '');
    const [model, setModel] = useState(data.model || 'gpt-4');

    return (
        <div className={`min-w-[280px] rounded-xl border-2 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm shadow-xl transition-all duration-200 ${selected ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105' : 'border-emerald-500/30'
            }`}>
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                        </svg>
                    </div>
                    <div className="text-white flex-1">
                        <div className="font-semibold text-sm">OpenAI</div>
                        <div className="text-xs text-emerald-100/80">LLM Model</div>
                    </div>
                </div>
            </div>

            {/* Input Handles (Left side) */}
            <Handle
                type="target"
                position={Position.Left}
                id="prompt"
                style={{ top: '45%' }}
                className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white"
            />
            <Handle
                type="target"
                position={Position.Left}
                id="context"
                style={{ top: '65%' }}
                className="!w-3 !h-3 !bg-purple-400 !border-2 !border-white"
            />

            {/* Body */}
            <div className="px-4 py-3 bg-zinc-900/50 backdrop-blur-sm space-y-3">
                {/* API Key Input */}
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        API Key
                    </label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="sk-..."
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>

                {/* Model Selection */}
                <div>
                    <label className="text-xs font-medium text-zinc-400 mb-1 block flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        Model
                    </label>
                    <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs bg-zinc-800/80 border border-zinc-700 rounded text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                        <option value="gpt-4">GPT-4</option>
                        <option value="gpt-4-turbo">GPT-4 Turbo</option>
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    </select>
                </div>

                {/* Handle Labels */}
                <div className="pt-2 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            Prompt
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-purple-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            Context
                        </span>
                    </div>
                </div>
            </div>

            {/* Output Handles (Right side) */}
            <Handle
                type="source"
                position={Position.Right}
                id="response"
                style={{ top: '45%' }}
                className="!w-3 !h-3 !bg-emerald-400 !border-2 !border-white"
            />
            <Handle
                type="source"
                position={Position.Right}
                id="tokens"
                style={{ top: '65%' }}
                className="!w-3 !h-3 !bg-amber-400 !border-2 !border-white"
            />

            {/* Footer with Output Labels */}
            <div className="px-4 py-2 bg-zinc-900/70 rounded-b-lg border-t border-zinc-800/50">
                <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-end gap-1 text-emerald-400">
                        Response
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-amber-400">
                        Token Count
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    </div>
                </div>
            </div>
        </div>
    );
});

OpenAINode.displayName = 'OpenAINode';
