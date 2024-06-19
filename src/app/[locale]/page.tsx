import Nav from '@/components/Nav/Nav';
import Toolbar from '@/components/Toolbar/Toolbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav />
      <Toolbar />
    </main>
  );
}
