'use client';

import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
          <Header />
          <main className="flex-grow-1">
            {children}
          </main>
        </div>
      </div>
    </AppProvider>
  );
}
