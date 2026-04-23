'use client';

import { useState } from "react";
import { User, Mail, Shield, Camera, Save, MapPin } from "lucide-react";
import Sidebar from "../../../components/organisms/Sidebar";
import DashboardLayout from "../../../components/templates/DashboardLayout";

export default function ProfilePage() {
  const [name, setName] = useState("Admin Azul");
  const [email, setEmail] = useState("admin@azulfinancas.com");

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="max-w-4xl animate-in fade-in duration-500 transition-colors duration-300">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Meu Perfil</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Informações da sua conta de administrador.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card de Foto e Status */}
          <div className="space-y-6">
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm text-center transition-all">
              <div className="relative inline-block group">
                {/* Avatar - Fica azul no dark mode ou mantém o slate escuro */}
                <div className="w-32 h-32 bg-slate-900 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                  AD
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  <Camera size={18} />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-black text-slate-900 dark:text-white text-lg">{name}</h3>
                <span className="inline-block mt-1 text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Nível Master
                </span>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Segurança</h4>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                <Shield size={18} className="text-emerald-500" />
                Autenticação em 2 etapas: Ativa
              </div>
            </section>
          </div>

          {/* Card de Dados Pessoais */}
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400">
                <User size={20} />
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Informações Pessoais</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome de Exibição */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nome de Exibição</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Localização */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Localização</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                    <input 
                      type="text" 
                      placeholder="São Paulo, Brasil"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-lg dark:shadow-none active:scale-95">
                  <Save size={18} /> Salvar Alterações
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}