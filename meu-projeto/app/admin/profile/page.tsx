'use client';

import { useState } from "react";
import { User, Mail, Shield, Camera, Save, MapPin } from "lucide-react";
import Sidebar from "../../components/organisms/Sidebar";
import DashboardLayout from "../../components/templates/DashboardLayout";

export default function ProfilePage() {
  const [name, setName] = useState("Admin Azul");
  const [email, setEmail] = useState("admin@azulfinancas.com");

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="max-w-4xl animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Meu Perfil</h2>
          <p className="text-slate-500 font-medium">Informações da sua conta de administrador.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card de Foto e Status */}
          <div className="space-y-6">
            <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
              <div className="relative inline-block group">
                <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-xl group-hover:bg-blue-600 transition-colors">
                  AD
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-white border border-slate-200 rounded-full shadow-lg hover:text-blue-600 transition-all">
                  <Camera size={18} />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-black text-slate-900 text-lg">{name}</h3>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Nível Master</span>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Segurança</h4>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <Shield size={18} className="text-emerald-500" />
                Autenticação em 2 etapas: Ativa
              </div>
            </section>
          </div>

          {/* Card de Dados Pessoais */}
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-8 text-blue-600">
                <User size={20} />
                <h3 className="font-bold text-slate-900 text-lg">Informações Pessoais</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome de Exibição</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Localização</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="São Paulo, Brasil"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-900 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg active:scale-95">
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