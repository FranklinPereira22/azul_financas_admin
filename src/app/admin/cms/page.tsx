'use client';

import { useState } from "react";
import { Save, Layout, Image as ImageIcon, MessageSquare, Type } from "lucide-react";
import Sidebar from "../../../components/organisms/Sidebar";
import DashboardLayout from "../../../components/templates/DashboardLayout";

export default function CMSPage() {
  // Estados para simular a edição da Landing Page (Página 3 do PDF)
  const [heroTitle, setHeroTitle] = useState("Simplifique sua vida financeira");
  const [bannerUrl, setBannerUrl] = useState("https://exemplo.com/banner.jpg");
  const [testimonialName, setTestimonialName] = useState("João Silva");
  const [testimonialText, setTestimonialText] = useState("O melhor app de finanças que já usei!");

  const handleSaveCMS = () => {
    // Aqui entraria a chamada para o seu backend/Prisma
    alert("Conteúdo da Landing Page atualizado com sucesso!");
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="max-w-4xl animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestão de Conteúdo</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            Edite textos e imagens da Landing Page sem alterar o código.
          </p>
        </div>

        <div className="space-y-6">
          {/* Seção: Hero Banner */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <Type size={20} />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Hero Section (Início)</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Título Principal</label>
                <input 
                  type="text" 
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">URL da Imagem de Fundo</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={bannerUrl}
                    onChange={(e) => setBannerUrl(e.target.value)}
                    className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                  />
                  <div className="w-11 h-11 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
                    <ImageIcon size={18} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção: Depoimentos */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <MessageSquare size={20} />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Depoimentos</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nome do Cliente</label>
                <input 
                  type="text" 
                  value={testimonialName}
                  onChange={(e) => setTestimonialName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Depoimento</label>
                <textarea 
                  value={testimonialText}
                  onChange={(e) => setTestimonialText(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all min-h-[100px]"
                />
              </div>
            </div>
          </section>

          {/* Botão de Salvar */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSaveCMS}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl active:scale-95"
            >
              <Save size={18} /> Publicar Alterações
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}