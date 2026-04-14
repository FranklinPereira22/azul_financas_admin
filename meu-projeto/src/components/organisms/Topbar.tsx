'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, ChevronDown, User, LogOut, Settings } from "lucide-react";

interface TopbarProps {
  userName?: string;
}

export default function Topbar({ userName = "Admin Azul" }: TopbarProps) {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Simulação de alertas do app mobile
  const notifications = [
    { id: 1, text: "Novo usuário cadastrado no App", time: "5min" },
    { id: 2, text: "Nova transação pendente", time: "15min" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
      
      {/* BARRA DE PESQUISA (Verde) */}
      <div className="flex-1 max-w-md relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Pesquisar dados, transações..." 
          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 font-medium"
        />
      </div>

      <div className="flex items-center gap-6">
        
        {/* NOTIFICAÇÕES (Amarelo) */}
        <div className="relative">
          <button 
            onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }}
            className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Bell size={22} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifs && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 animate-in fade-in zoom-in duration-200">
              <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-3">Notificações do App</h4>
              <div className="space-y-2">
                {notifications.map(n => (
                  <div key={n.id} className="p-2 hover:bg-slate-50 rounded-xl cursor-pointer transition-all border border-transparent hover:border-slate-100">
                    <p className="text-xs font-bold text-slate-800">{n.text}</p>
                    <span className="text-[10px] text-slate-400">{n.time} atrás</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        {/* PERFIL E MENU (Vermelho) */}
        <div className="relative">
          <button 
            onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }}
            className="flex items-center gap-3 p-1 hover:bg-slate-50 rounded-xl transition-all group"
          >
            <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-black group-hover:bg-blue-600 transition-colors">
              AD
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">{userName}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Administrador</p>
            </div>
            <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-4 bg-slate-50/50 border-b border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sessão Ativa</p>
                <p className="text-sm font-black text-slate-900 truncate">{userName}</p>
              </div>
              
              <div className="p-2">
                <Link 
                  href="/admin/profile" 
                  onClick={() => setShowProfile(false)}
                  className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                >
                  <User size={16} /> Meu Perfil
                </Link>

                <Link 
                  href="/admin/settings" 
                  onClick={() => setShowProfile(false)}
                  className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                >
                  <Settings size={16} /> Ajustes do App
                </Link>

                <div className="h-[1px] bg-slate-100 my-2" />
                
                <Link 
                  href="/login" 
                  className="w-full flex items-center gap-2 p-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <LogOut size={16} /> Sair do Painel
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}