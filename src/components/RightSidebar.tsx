'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setSelectedNode, setRightSidebarOpen } from '@/store/flowSlice';
import { useState, useEffect } from 'react';

interface RightSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function RightSidebar() {
    const dispatch = useDispatch();
    const selectedNode = useSelector((state: RootState) => state.flow.selectedNode);
    const isOpen = useSelector((state: RootState) => state.flow.isRightSidebarOpen);

    // UI State
    const [activeTab, setActiveTab] = useState<'setup' | 'test'>('setup');
    const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'success'>('idle');

    // Reset state when node changes
    useEffect(() => {
        setTestStatus('idle');
        setActiveTab('setup');
    }, [selectedNode?.id]);

    const closeSidebar = () => {
        dispatch(setRightSidebarOpen(false));
    };

    const runTest = () => {
        setTestStatus('running');
        setTimeout(() => {
            setTestStatus('success');
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <aside className="w-[400px] bg-zinc-950 border-l border-zinc-800 flex flex-col h-full absolute right-0 top-0 bottom-0 z-20 shadow-2xl transition-transform duration-300 ease-in-out transform translate-x-0">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-lg">
                        {selectedNode ? '⚡' : '⚙️'}
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-zinc-100">
                            {selectedNode ? selectedNode.data.label || selectedNode.type : 'Configuration'}
                        </h2>
                        <p className="text-[10px] text-zinc-500 font-mono">{selectedNode?.id}</p>
                    </div>
                </div>
                <button
                    onClick={closeSidebar}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors p-1.5 rounded-md hover:bg-zinc-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>

            {/* Tabs */}
            {selectedNode && (
                <div className="flex border-b border-zinc-800">
                    <button
                        onClick={() => setActiveTab('setup')}
                        className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${activeTab === 'setup' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5' : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'}`}
                    >
                        Setup
                    </button>
                    <button
                        onClick={() => setActiveTab('test')}
                        className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${activeTab === 'test' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5' : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'}`}
                    >
                        Test
                    </button>
                </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto bg-zinc-950/50">
                {selectedNode ? (
                    <div className="p-6">
                        {activeTab === 'setup' ? (
                            <div className="space-y-6">
                                {/* Configuration Section */}
                                <div className="space-y-4">
                                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-3">
                                        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Node Properties</h3>

                                        <div className="grid gap-4">
                                            <div>
                                                <label className="text-xs text-zinc-500 block mb-1.5">Label</label>
                                                <input
                                                    type="text"
                                                    defaultValue={selectedNode.data.label}
                                                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 transition-colors"
                                                    disabled
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="text-xs text-zinc-500 block mb-1.5">X Position</label>
                                                    <div className="bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-400 font-mono">
                                                        {Math.round(selectedNode.position.x)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-500 block mb-1.5">Y Position</label>
                                                    <div className="bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-400 font-mono">
                                                        {Math.round(selectedNode.position.y)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-900/10 border border-blue-900/30 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">ℹ️</span>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-blue-200">How to configure</p>
                                                <p className="text-xs text-blue-300/70 leading-relaxed">
                                                    Configure the fields above to determine how this step behaves. Changes are saved automatically.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {/* Test Section */}

                                {/* Status Card */}
                                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-xl transition-all ${testStatus === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                                            testStatus === 'running' ? 'bg-indigo-500/20 text-indigo-400 animate-pulse' :
                                                'bg-zinc-800 text-zinc-500'
                                        }`}>
                                        {testStatus === 'success' ? '✓' : testStatus === 'running' ? '⚡' : '○'}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-zinc-200">
                                            {testStatus === 'success' ? 'Step was successful!' :
                                                testStatus === 'running' ? 'Running test...' :
                                                    'Test this step'}
                                        </h3>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {testStatus === 'success' ? 'Data is ready to use' : 'Click below to verify functionality'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={runTest}
                                        disabled={testStatus === 'running'}
                                        className={`w-full py-2 px-4 rounded-md text-xs font-semibold tracking-wide transition-all ${testStatus === 'running'
                                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                                            }`}
                                    >
                                        {testStatus === 'running' ? 'Testing...' : testStatus === 'success' ? 'Retest Step' : 'Test Step'}
                                    </button>
                                </div>

                                {testStatus === 'success' && (
                                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

                                        {/* Data In */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Data In</label>
                                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">JSON</span>
                                            </div>
                                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 overflow-hidden">
                                                <pre className="text-[10px] leading-relaxed text-zinc-400 font-mono">
                                                    {JSON.stringify({
                                                        "input": "User query here",
                                                        "timestamp": new Date().toISOString(),
                                                        "context": {
                                                            "userId": "user_123",
                                                            "sessionId": "sess_abc"
                                                        }
                                                    }, null, 2)}
                                                </pre>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="flex justify-center text-zinc-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                                        </div>

                                        {/* Data Out */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Data Out</label>
                                                <span className="text-[10px] bg-emerald-900/30 text-emerald-400 px-1.5 py-0.5 rounded">JSON</span>
                                            </div>
                                            <div className="bg-zinc-900 border border-emerald-900/30 rounded-lg p-3 overflow-hidden relative group">
                                                <div className="absolute inset-y-0 left-0 w-1 bg-emerald-500"></div>
                                                <pre className="text-[10px] leading-relaxed text-emerald-100/80 font-mono">
                                                    {JSON.stringify({
                                                        "result": "Processed successfully",
                                                        "status": "completed",
                                                        "data": {
                                                            "generated_text": "Here is the response...",
                                                            "tokens": 150
                                                        }
                                                    }, null, 2)}
                                                </pre>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-500 p-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl mb-4 shadow-xl">
                            👋
                        </div>
                        <h3 className="text-sm font-medium text-zinc-300 mb-1">Select a Node</h3>
                        <p className="text-xs max-w-[200px]">Click on any node in the canvas to configure it and test its behavior.</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
