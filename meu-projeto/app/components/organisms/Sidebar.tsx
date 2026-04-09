'use client';

import { BarChart3, Users, FileText, Settings } from "lucide-react";
import { usePathname } from "next/navigation"; // Hook para saber em qual página estamos
import NavItem from "../atoms/NavItem";

export default function Sidebar() {
  const pathname = usePathname(); // Pega a URL atual (ex: /admin ou /admin/users)

  return (
    <aside className="w-64 bg-white shadow-lg p-5 h-screen flex flex-col justify-between border-r border-slate-100">
      <div>
        <h1 className="text-2xl font-black text-blue-700 mb-8">Azul Finanças</h1>
        
        <nav className="space-y-4">
          {/* Dashboard agora é um NavItem e só fica azul se a rota for exatamente /admin */}
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

      <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          AF
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">Admin Azul</p>
          <p className="text-xs text-slate-500 font-medium">admin@azulfinancas.com</p>
        </div>
      </div>
    </aside>
  );
}