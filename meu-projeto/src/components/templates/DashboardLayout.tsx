'use client';

import Topbar from "../organisms/Topbar";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function DashboardLayout({ children, sidebar }: LayoutProps) {
  return (
    // Removi o slate escuro e voltei para o branco total ou slate-50 (cinza quase branco)
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      {/* Sidebar - Mantendo fixo na lateral */}
      <aside className="sticky top-0 h-screen border-r border-slate-100 bg-white z-50">
        {sidebar}
      </aside>

      {/* Área de Conteúdo */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        
        {/* Topbar Fixo e Branco */}
        <Topbar /> 
        
        {/* Main com fundo branco/claro para não ficar cinza */}
        <main className="p-8 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}