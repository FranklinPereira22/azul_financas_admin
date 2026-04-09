'use client';

import { useState } from "react";
import { 
  DollarSign, Users, BarChart3, ArrowUpRight, ArrowDownLeft 
} from "lucide-react";
import Sidebar from "../components/organisms/Sidebar";
import DashboardLayout from "../components/templates/DashboardLayout";

export default function AdminPage() {
  // Estado para os dados das transações
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Entrada', title: 'Assinatura Premium', value: 'R$ 200,00', date: 'Hoje' },
    { id: 2, type: 'Saída', title: 'Servidor AWS', value: 'R$ 500,00', date: 'Ontem' },
    { id: 3, type: 'Saída', title: 'Domínio Anual', value: 'R$ 120,00', date: '02 Abr' },
  ]);

  const chartData = [40, 60, 30, 80, 50, 90, 70];
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];

  // 1. FUNÇÃO EXPORTAR (Circulada em Roxo na imagem 907add)
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Tipo,Titulo,Valor,Data\n"
      + transactions.map(t => `${t.id},${t.type},${t.title},${t.value},${t.date}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio_azul_financas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      {/* O Topbar não está aqui, ele é chamado pelo Layout para não duplicar */}
      
      <main className="animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard</h2>
          <p className="text-slate-500 font-medium text-sm">Controle financeiro do app atualizado em tempo real.</p>
        </div>

        {/* Cards de Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Receita Total</p>
              <h3 className="text-2xl font-black text-slate-900">R$ 25.000,00</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign size={20} /></div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Usuários Ativos</p>
              <h3 className="text-2xl font-black text-slate-900">1.245</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={20} /></div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Relatórios</p>
              <h3 className="text-2xl font-black text-slate-900">320</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><BarChart3 size={20} /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gráfico de Desempenho */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-bold text-slate-900 text-lg">Desempenho Mensal</h3>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Relatório 2026</span>
            </div>
            <div className="flex items-end gap-5 h-64 px-2">
              {chartData.map((h, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <span className="text-[10px] font-black text-slate-300 mb-2 group-hover:text-blue-600 transition-colors">{h}k</span>
                  <div 
                    className="w-full max-w-[40px] bg-blue-600 rounded-t-xl transition-all duration-300 group-hover:bg-blue-500 relative"
                    style={{ height: `${h * 2}px` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-t-xl" />
                  </div>
                  <span className="text-[11px] mt-4 font-bold text-slate-400 uppercase tracking-wider">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Últimas Transações e Botão Exportar */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <h3 className="font-bold text-slate-900 text-lg mb-8">Últimas Atividades</h3>
            <div className="space-y-4 flex-1">
              {transactions.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-blue-100 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl shadow-sm ${t.type === 'Entrada' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                      {t.type === 'Entrada' ? <ArrowUpRight size={18} /> : <ArrowDownLeft size={18} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{t.title}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{t.date}</p>
                    </div>
                  </div>
                  <span className={`font-black text-sm ${t.type === 'Entrada' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {t.type === 'Entrada' ? `+ ${t.value.split(',')[0]}` : `- ${t.value.split(',')[0]}`}
                  </span>
                </div>
              ))}
            </div>

            {/* 2. BOTÃO EXPORTAR FUNCIONAL (Roxo) */}
            <button 
              onClick={handleExport}
              className="w-full mt-8 py-4 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98]"
            >
              Exportar Relatório
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}