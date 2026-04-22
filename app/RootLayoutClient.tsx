'use client';

import { AppProvider } from './contexts/AppProvider';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="page-wrapper">
        <Sidebar />
        <div className="app-content">
          <Header />
          <main className="main-content">
            {children}
          </main>
        </div>
      </div>
    </AppProvider>
  );
}
