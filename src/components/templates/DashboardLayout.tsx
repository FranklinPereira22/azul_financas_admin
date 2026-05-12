'use client';

import Topbar from "../organisms/Topbar";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function DashboardLayout({ children, sidebar }: LayoutProps) {
  return (
    /* 1. Troquei bg-white por cores que mudam no dark mode */
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sidebar - Agora com fundo dinâmico e borda sutil no dark */}
      <aside className="sticky top-0 h-screen border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-50">
        {sidebar}
      </aside>

      {/* Área de Conteúdo */}
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        
        {/* Topbar (A cor interna já é tratada no Topbar.tsx) */}
        <Topbar /> 
        
        {/* 2. Removi o bg-white fixo do main para ele herdar o fundo do layout ou usar dark mode */}
        <main className="p-8 flex-1 bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}