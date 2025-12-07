'use client';

export default function Sidebar() {
    // LLM Models
    const llmNodes = [
        { id: 'chatopenai', label: 'ChatOpenAI', color: 'bg-orange-500', description: 'langchain.chat_models', icon: '🦜' },
    ];

    // Prompts
    const promptNodes = [
        { id: 'prompttemplate', label: 'PromptTemplate', color: 'bg-blue-500', description: 'langchain.prompts', icon: '📝' },
        { id: 'chatprompttemplate', label: 'ChatPromptTemplate', color: 'bg-blue-500', description: 'langchain.prompts', icon: '💬' },
    ];

    // Chains
    const chainNodes = [
        { id: 'llmchain', label: 'LLMChain', color: 'bg-purple-500', description: 'langchain.chains', icon: '⛓️' },
        { id: 'sequentialchain', label: 'SequentialChain', color: 'bg-purple-500', description: 'langchain.chains', icon: '🔄' },
    ];

    // Memory & Parsers
    const memoryNodes = [
        { id: 'conversationbuffermemory', label: 'ConversationBufferMemory', color: 'bg-green-500', description: 'langchain.memory', icon: '🧠' },
        { id: 'stroutputparser', label: 'StrOutputParser', color: 'bg-pink-500', description: 'langchain.schema', icon: '📄' },
        { id: 'structuredoutputparser', label: 'StructuredOutputParser', color: 'bg-pink-500', description: 'Extract JSON', icon: '🛠️' },
    ];

    // Utilities
    const utilityNodes = [
        { id: 'start', label: 'Start', color: 'bg-zinc-500', description: 'Flow Start', icon: '▶️' },
        { id: 'end', label: 'End', color: 'bg-zinc-500', description: 'Flow End', icon: '⏹️' },
        { id: 'outputdisplay', label: 'Output Display', color: 'bg-zinc-500', description: 'Show Result', icon: '📤' },
        { id: 'textinput', label: 'Text Input', color: 'bg-zinc-500', description: 'User Input', icon: '⌨️' },
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
                    <div className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors mt-0.5 font-mono">
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
                <h1 className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    LangChain Builder
                </h1>
                <p className="text-sm text-zinc-400">Visual LangChain Programming</p>
            </div>

            {/* Nodes */}
            <div className="flex-1 p-3 overflow-y-auto hide-scrollbar">
                {/* LLM Models */}
                <CategoryHeader title="LLM Models" icon="🤖" color="text-orange-500" />
                <div className="space-y-2">
                    {llmNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Prompts */}
                <CategoryHeader title="Prompts" icon="📝" color="text-blue-500" />
                <div className="space-y-2">
                    {promptNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Chains */}
                <CategoryHeader title="Chains" icon="⛓️" color="text-purple-500" />
                <div className="space-y-2">
                    {chainNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Memory & Parsers */}
                <CategoryHeader title="Memory & Parsers" icon="🧠" color="text-green-500" />
                <div className="space-y-2">
                    {memoryNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>

                {/* Utilities */}
                <CategoryHeader title="Utilities" icon="🔧" color="text-zinc-500" />
                <div className="space-y-2">
                    {utilityNodes.map((node) => <NodeCard key={node.id} node={node} />)}
                </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50">
                <div className="text-[10px] text-zinc-500 space-y-1">
                    <div className="font-semibold text-zinc-400 mb-1.5">💡 LangChain Patterns:</div>
                    <div className="pl-1 font-mono">PromptTemplate | ChatOpenAI</div>
                    <div className="pl-1 font-mono">LLMChain(llm, prompt)</div>
                    <div className="pl-1 font-mono">SequentialChain([chains])</div>
                </div>
            </div>
        </aside>
    );
}
