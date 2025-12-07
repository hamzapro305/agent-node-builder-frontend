'use client';

export default function Sidebar() {
    // Essential Flow
    const flowNodes = [
        { id: 'start', label: 'Start', color: 'bg-emerald-500', description: 'Entry point', icon: '▶️' },
        { id: 'outputdisplay', label: 'Output Display', color: 'bg-green-500', description: 'Show final result', icon: '📤' },
        { id: 'end', label: 'End', color: 'bg-red-500', description: 'Workflow end', icon: '⏹️' },
    ];

    // AI & LLM
    const aiNodes = [
        { id: 'openai', label: 'AI Chat', color: 'bg-emerald-600', description: 'OpenAI completion', icon: '🤖' },
        { id: 'prompttemplate', label: 'Prompt Builder', color: 'bg-purple-500', description: 'Build prompts', icon: '📋' },
    ];

    // Input & Data
    const inputNodes = [
        { id: 'textinput', label: 'Text Input', color: 'bg-blue-500', description: 'User input', icon: '📝' },
        { id: 'variable', label: 'Variable', color: 'bg-purple-600', description: 'Store & reuse', icon: '💾' },
    ];

    // Text Tools (Practical)
    const toolsNodes = [
        { id: 'textmerge', label: 'Merge Texts', color: 'bg-cyan-500', description: 'Combine texts', icon: '🔗' },
        { id: 'texttransform', label: 'Transform Text', color: 'bg-cyan-500', description: 'Change case', icon: '✨' },
        { id: 'condition', label: 'Condition', color: 'bg-amber-500', description: 'Check content', icon: '🔍' },
        { id: 'jsonparser', label: 'JSON Parser', color: 'bg-cyan-600', description: 'Parse JSON', icon: '📦' },
    ];

    const onDragStart = (event: React.DragEvent, nodeType: string, label: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('label', label);
        event.dataTransfer.effectAllowed = 'move';
    };

    const NodeCard = ({ node }: { node: any }) => (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, node.id, node.label)}
            className="group cursor-grab active:cursor-grabbing bg-gradient-to-br from-zinc-900 to-zinc-900/50 hover:from-zinc-800 hover:to-zinc-800/50 border border-zinc-800 hover:border-zinc-700 rounded-xl p-3 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:scale-[1.02]"
        >
            <div className="flex items-start gap-2.5">
                <div className={`w-9 h-9 rounded-lg ${node.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-lg shrink-0`}>
                    {node.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors leading-tight">
                        {node.label}
                    </div>
                    <div className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors mt-0.5">
                        {node.description}
                    </div>
                </div>
            </div>
        </div>
    );

    const CategoryHeader = ({ title, icon, color = 'text-zinc-500' }: { title: string; icon: string; color?: string }) => (
        <h3 className={`text-[10px] font-bold ${color} uppercase tracking-wider mb-2 flex items-center gap-1.5 mt-4 first:mt-0`}>
            <span className="text-sm">{icon}</span>
            {title}
        </h3>
    );

    return (
        <aside className="w-80 bg-zinc-950 border-r border-zinc-800 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
                <h1 className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    AI Agent Builder
                </h1>
                <p className="text-sm text-zinc-400">Build AI agents in minutes</p>
            </div>

            {/* Nodes */}
            <div className="flex-1 p-3 overflow-y-auto hide-scrollbar">
                {/* Flow Control */}
                <CategoryHeader title="Essential Flow" icon="⚡" color="text-emerald-500" />
                <div className="space-y-2">
                    {flowNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* AI */}
                <CategoryHeader title="AI & Prompts" icon="🤖" color="text-purple-500" />
                <div className="space-y-2">
                    {aiNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Input & Data */}
                <CategoryHeader title="Input & Storage" icon="📥" color="text-blue-500" />
                <div className="space-y-2">
                    {inputNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Tools */}
                <CategoryHeader title="Text Tools" icon="🔧" color="text-cyan-500" />
                <div className="space-y-2">
                    {toolsNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>
            </div>

            {/* Examples Footer */}
            <div className="p-3 border-t border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50">
                <div className="text-[10px] text-zinc-500 space-y-1">
                    <div className="font-semibold text-zinc-400 mb-1.5">💡 Quick Examples:</div>
                    <div className="pl-1">• Content Writer Agent</div>
                    <div className="pl-1">• Email Assistant</div>
                    <div className="pl-1">• Data Analyzer</div>
                </div>
            </div>
        </aside>
    );
}
