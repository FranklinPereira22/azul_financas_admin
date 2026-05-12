'use client';

import { Trash2, Edit, Plus, X, Package, DollarSign, AlignLeft } from "lucide-react";
import { useState } from "react";
import Sidebar from "../../../components/organisms/Sidebar";
import DashboardLayout from "../../../components/templates/DashboardLayout";

interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
}

export default function ServicosPage() {
  // Dados iniciais baseados no seu estilo de listagem
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "Consultoria Premium", price: "450.00", description: "Análise financeira completa e personalizada." },
    { id: 2, name: "Planilha de Gastos", price: "89.90", description: "Ferramenta automatizada para controle mensal." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  const handleOpenModal = (service: Service | null = null) => {
    if (service) {
      setCurrentService(service);
      setFormData({ name: service.name, price: service.price, description: service.description });
    } else {
      setCurrentService(null);
      setFormData({ name: '', price: '', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentService) {
      setServices(services.map(s => s.id === currentService.id ? { ...s, ...formData } : s));
    } else {
      const newService = { id: Date.now(), ...formData };
      setServices([newService, ...services]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Deseja excluir este serviço?")) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
        
        {/* Header da Tabela - Igual ao seu Users */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Gestão de Serviços</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Catálogo de produtos da Azul Finanças</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-semibold active:scale-95"
          >
            <Plus size={20} /> Novo Serviço
          </button>
        </div>

        {/* TABELA - Mantendo a proporção do seu Users */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-900 dark:text-slate-100 text-xs uppercase font-bold tracking-widest bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4">Serviço / Produto</th>
                <th className="px-6 py-4">Descrição</th>
                <th className="px-6 py-4">Preço</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {services.map((service) => (
                <tr key={service.id} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">{service.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium text-sm italic">{service.description}</td>
                  <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400">R$ {service.price}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button 
                        onClick={() => handleOpenModal(service)} 
                        className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors border border-transparent"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)} 
                        className="p-2 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors border border-transparent"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL - Design Idêntico ao seu de Usuários */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
              <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  {currentService ? 'Editar Serviço' : 'Novo Serviço'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-all">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-8 space-y-6">
                {/* Nome do Serviço */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <Package size={16} className="text-blue-600" /> Nome do Serviço
                  </label>
                  <input 
                    required
                    placeholder="Ex: Consultoria Premium"
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>

                {/* Preço */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <DollarSign size={16} className="text-blue-600" /> Preço Unitário (R$)
                  </label>
                  <input 
                    required
                    placeholder="0.00"
                    type="number"
                    step="0.01" 
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>

                {/* Descrição */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <AlignLeft size={16} className="text-blue-600" /> Descrição do Produto
                  </label>
                  <textarea 
                    required
                    placeholder="Explique o que este serviço oferece..."
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                  />
                </div>

                {/* Botões - Mesma lógica do seu Users */}
                <div className="flex gap-4 pt-2">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 font-bold text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 dark:shadow-none"
                  >
                    {currentService ? 'Atualizar' : 'Salvar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}