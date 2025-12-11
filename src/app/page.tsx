'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setRightSidebarOpen } from '@/store/flowSlice';
import Sidebar from '@/components/Sidebar';
import FlowCanvas from '@/components/FlowCanvas';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  const dispatch = useDispatch();
  const isRightSidebarOpen = useSelector((state: RootState) => state.flow.isRightSidebarOpen);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950">
      <Sidebar />
      <main className="flex-1 relative flex">
        <div className="flex-1 relative">
          <FlowCanvas />
          {/* Toggle Button for Right Sidebar */}
          {!isRightSidebarOpen && (
            <button
              onClick={() => dispatch(setRightSidebarOpen(true))}
              className="absolute top-4 right-4 z-10 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="15" x2="15" y1="3" y2="21" />
              </svg>
            </button>
          )}
        </div>
        <RightSidebar />
      </main>
    </div>
  );
}
