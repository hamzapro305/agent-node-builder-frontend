import Sidebar from '@/components/Sidebar';
import FlowCanvas from '@/components/FlowCanvas';

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950">
      <Sidebar />
      <main className="flex-1 relative">
        <FlowCanvas />
      </main>
    </div>
  );
}
