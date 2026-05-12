'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, ChevronDown, User, LogOut, Settings, Moon, Sun } from "lucide-react";

interface TopbarProps {
  userName?: string;
}

export default function Topbar({ userName = "Admin Azul" }: TopbarProps) {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 1. Sincroniza o tema ao montar o componente
  useEffect(() => {
    // Verifica se já existe preferência salva ou se o sistema prefere dark
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // 2. Função de alternar tema robusta
  const toggleTheme = () => {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const notifications = [
    { id: 1, text: "Novo usuário cadastrado no App", time: "5min" },
    { id: 2, text: "Nova transação pendente", time: "15min" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 md:px-8 py-4 flex justify-between items-center transition-colors duration-300">
      
      {/* BARRA DE PESQUISA */}
      <div className="flex-1 max-w-md relative group hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Pesquisar dados..." 
          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 dark:text-slate-100 font-medium placeholder:text-slate-400"
        />
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        
        {/* BOTÃO DARK MODE */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-500 dark:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all active:scale-95"
          aria-label="Alternar Tema"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* NOTIFICAÇÕES */}
        <div className="relative">
          <button 
            onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }}
            className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Bell size={22} />
            <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-950"></span>
          </button>

          {showNotifs && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-xl rounded-2xl p-4 animate-in fade-in zoom-in duration-200">
              <h4 className="font-bold text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Notificações</h4>
              <div className="space-y-2">
                {notifications.map(n => (
                  <div key={n.id} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl cursor-pointer transition-all">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{n.text}</p>
                    <span className="text-[10px] text-slate-400">{n.time} atrás</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden xs:block"></div>

        {/* PERFIL */}
        <div className="relative">
          <button 
            onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }}
            className="flex items-center gap-2 md:gap-3 p-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all group"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-900 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-black group-hover:bg-blue-600 transition-colors">
              AF
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none">{userName}</p>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-1">Admin</p>
            </div>
            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <p className="text-sm font-black text-slate-900 dark:text-slate-100 truncate">{userName}</p>
              </div>
              
              <div className="p-2">
                <Link href="/admin/profile" onClick={() => setShowProfile(false)} className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all">
                  <User size={16} /> Perfil
                </Link>
                <Link href="/admin/settings" onClick={() => setShowProfile(false)} className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all">
                  <Settings size={16} /> Ajustes
                </Link>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-700 my-2" />
                <Link href="/auth" className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all">
                  <LogOut size={16} /> Sair
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}