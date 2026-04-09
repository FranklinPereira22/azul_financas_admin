'use client';

import { useState } from "react";
import { FileText, Edit3, Download, Trash2, Plus, X, CheckCircle2 } from "lucide-react";
import Sidebar from "../../components/organisms/Sidebar";
import DashboardLayout from "../../components/templates/DashboardLayout";

export default function ReportsPage() {
  const [reports, setReports] = useState([
    { id: 1, name: "Fechamento Mensal - Março", date: "01/04/2026", status: "CONCLUÍDO" },
    { id: 2, name: "Análise de Churn Q1", date: "28/03/2026", status: "CONCLUÍDO" },
  ]);

  // Estados para UI
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState<{id: number, name: string} | null>(null);
  const [newName, setNewName] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  // Mostrar Toast temporário
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleCreate = () => {
    const id = Date.now();
    setReports([{ id, name: `Relatório Novo #${id.toString().slice(-3)}`, date: "09/04/2026", status: "CONCLUÍDO" }, ...reports]);
    showToast("Relatório criado com sucesso!");
  };

  const openEditModal = (id: number, name: string) => {
    setCurrentReport({ id, name });
    setNewName(name);
    setIsModalOpen(true);
  };

  const saveEdit = () => {
    if (currentReport) {
      setReports(reports.map(r => r.id === currentReport.id ? { ...r, name: newName } : r));
      setIsModalOpen(false);
      showToast("Nome atualizado!");
    }
  };

  const handleDownload = (name: string) => {
    showToast(`Baixando: ${name}...`);
    // Lógica de download aqui...
  };

  const handleDelete = (id: number) => {
    setReports(reports.filter(r => r.id !== id));
    showToast("Relatório removido.");
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="relative">
        {/* TOAST NOTIFICATION */}
        {toast && (
          <div className="fixed bottom-10 right-10 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300 z-[100]">
            <CheckCircle2 className="text-emerald-400" size={20} />
            <span className="text-sm font-bold">{toast}</span>
          </div>
        )}

        {/* MODAL DE EDIÇÃO CUSTOMIZADO */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-in zoom-in duration-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-slate-900">Editar Documento</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X /></button>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Nome do Relatório</p>
              <input 
                type="text" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 font-bold text-slate-900 focus:border-blue-500 outline-none transition-all mb-8"
              />
              <div className="flex gap-3">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-2xl font-black text-slate-400 hover:bg-slate-50 transition-all">Cancelar</button>
                <button onClick={saveEdit} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">Salvar</button>
              </div>
            </div>
          </div>
        )}

        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Relatórios</h2>
            <p className="text-slate-500 font-medium text-sm">Controle total dos seus documentos.</p>
          </div>
          <button 
            onClick={handleCreate}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-95"
          >
            <Plus size={20} /> Novo Relatório
          </button>
        </div>

        {/* TABELA DE RELATÓRIOS */}
        <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 px-10 py-5 bg-slate-50/50 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            <div className="col-span-9">Documento</div>
            <div className="col-span-3 text-right">Ações</div>
          </div>

          <div className="divide-y divide-slate-50">
            {reports.map((report) => (
              <div key={report.id} className="grid grid-cols-12 px-10 py-8 items-center hover:bg-blue-50/20 transition-all group">
                <div className="col-span-9 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-1">{report.name}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-bold text-slate-400">{report.date}</span>
                      <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase">{report.status}</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 flex justify-end gap-3">
                  <button onClick={() => openEditModal(report.id, report.name)} className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit3 size={18} /></button>
                  <button onClick={() => handleDownload(report.name)} className="p-3 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"><Download size={18} /></button>
                  <button onClick={() => handleDelete(report.id)} className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}