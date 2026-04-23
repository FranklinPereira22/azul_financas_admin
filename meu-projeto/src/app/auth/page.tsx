'use client';

import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    /* Fundo da página - Adapta para o azul escuro profundo no Dark Mode */
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 transition-colors duration-300">
      
      {/* Card Principal */}
      <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 rounded-[40px] p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-800 transition-all">
        
        <div className="mb-10 text-center">
          {/* Ícone de Cadeado - Trocado Verde por Azul */}
          <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-100 dark:shadow-none">
            <Lock size={28} />
          </div>
          
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {isLogin ? "Bem-vindo de volta" : "Criar sua conta"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">
            {isLogin ? "Acesse sua conta para gerenciar dados." : "Comece sua jornada agora mesmo."}
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                  placeholder="Seu nome"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
              <input 
                type="email" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                placeholder="exemplo@email.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
              <input 
                type="password" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Botão de Ação - Trocado Verde por Azul */}
          <button className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 dark:shadow-none flex items-center justify-center gap-2 group active:scale-[0.98]">
            {isLogin ? "Entrar na conta" : "Finalizar Cadastro"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            {isLogin ? "Ainda não tem conta?" : "Já possui conta?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 dark:text-blue-400 font-black hover:underline underline-offset-4"
            >
              {isLogin ? "Criar conta" : "Fazer Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}