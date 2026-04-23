'use client';

import { Sparkles, ArrowRight, LayoutDashboard, Settings, LogOut, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserHomePage() {
  const [isDark, setIsDark] = useState(false);

  // Sincroniza o ícone com o estado real do HTML
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle('dark');
    setIsDark(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="px-8 py-6 flex justify-between items-center border-b border-slate-50 dark:border-slate-900">
        <h1 className="text-xl font-black text-blue-600 tracking-tighter">Azul Finanças</h1>
        <div className="flex items-center gap-4">
          {/* BOTÃO DE TEMA ADICIONADO AQUI TAMBÉM */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
            <span className="text-xs font-black text-slate-600 dark:text-slate-400">US</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-wider mb-6">
            <Sparkles size={12} /> Bem-vindo de volta
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Olá, Usuário. <br />
            O que vamos fazer <span className="text-blue-600">hoje?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl">
            Sua central de controle simplificada. Acesse seus relatórios ou gerencie suas preferências abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Admin - Fica mais escuro no dark mode */}
          <Link href="/admin" className="group p-10 bg-slate-900 dark:bg-slate-950 rounded-[40px] text-white flex flex-col justify-between min-h-[300px] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 border border-transparent dark:border-slate-800">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Painel de Controle</h3>
              <p className="text-slate-400 font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                Acessar visão administrativa <ArrowRight size={18} />
              </p>
            </div>
          </Link>

          {/* Card Usuário - Cores invertidas no dark mode */}
          <div className="group p-10 bg-blue-50 dark:bg-slate-900 rounded-[40px] text-blue-900 dark:text-blue-400 flex flex-col justify-between min-h-[300px] transition-all hover:-translate-y-2 border border-blue-100/50 dark:border-slate-800">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 dark:text-white">Meus Dados</h3>
              <p className="text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2">
                Ver perfil completo <ArrowRight size={18} />
              </p>
            </div>
          </div>
        </div>

        <button className="mt-12 flex items-center gap-2 text-slate-400 font-bold hover:text-red-500 transition-colors">
          <LogOut size={18} /> Sair da conta
        </button>
      </main>
    </div>
  );
}