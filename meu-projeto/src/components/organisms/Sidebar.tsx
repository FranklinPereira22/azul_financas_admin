'use client';

import { BarChart3, Users, FileText, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "../atoms/NavItem";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 shadow-lg p-5 h-screen flex flex-col justify-between border-r border-slate-100 dark:border-slate-800 transition-colors">
      <div>
        <h1 className="text-2xl font-black text-blue-700 dark:text-blue-500 mb-8">Azul Finanças</h1>
        
        <nav className="space-y-4">
          <NavItem 
            label="Dashboard" 
            icon={<BarChart3 size={18} />} 
            href="/admin" 
            active={pathname === "/admin"} 
          />

          <NavItem 
            label="Usuários" 
            icon={<Users size={18} />} 
            href="/admin/users" 
            active={pathname === "/admin/users"} 
          />

          <NavItem 
            label="Relatórios" 
            icon={<FileText size={18} />} 
            href="/admin/reports" 
            active={pathname.includes("/reports")}
          />

          <NavItem 
            label="Configurações" 
            icon={<Settings size={18} />} 
            href="/admin/settings" 
            active={pathname.includes("/settings")}
          />
        </nav>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
          AF
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Admin Azul</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">admin@azulfinancas.com</p>
        </div>
      </div>
    </aside>
  );
}