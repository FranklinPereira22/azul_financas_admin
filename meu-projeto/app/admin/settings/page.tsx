'use client';

import { useState } from "react";
import { 
  Settings as SettingsIcon, Bell, Smartphone, 
  Lock, Save, Globe, Palette 
} from "lucide-react";
import Sidebar from "../../components/organisms/Sidebar";
import DashboardLayout from "../../components/templates/DashboardLayout";

export default function SettingsPage() {
  // Estados para controlar as configurações do App Mobile
  const [appName, setAppName] = useState("Azul Finanças");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleSaveSettings = () => {
    // Aqui você conectaria com seu Firebase/Supabase
    alert("Configurações sincronizadas com o App Mobile!");
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="max-w-4xl animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Ajustes do App</h2>
          <p className="text-slate-500 font-medium text-sm">Controle as variáveis globais do seu aplicativo mobile.</p>
        </div>

        <div className="space-y-6">
          {/* Card: Identidade do App */}
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-blue-600">
              <Smartphone size={20} />
              <h3 className="font-bold text-slate-900 text-lg">Interface Mobile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome do Aplicativo</label>
                <input 
                  type="text" 
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Cor Principal (Hex)</label>
                <div className="flex gap-2">
                  <div className="w-11 h-11 bg-blue-600 rounded-xl border border-slate-200" />
                  <input 
                    type="text" 
                    placeholder="#2563EB"
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Card: Controle de Sistema */}
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-blue-600">
              <SettingsIcon size={20} />
              <h3 className="font-bold text-slate-900 text-lg">Sistema e Notificações</h3>
            </div>

            <div className="space-y-4">
              {/* Toggle: Modo Manutenção */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-800">Modo Manutenção</p>
                  <p className="text-[11px] text-slate-500 font-medium">Impede o acesso de usuários ao app mobile durante atualizações.</p>
                </div>
                <button 
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`w-12 h-6 rounded-full transition-all relative ${maintenanceMode ? 'bg-red-500' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${maintenanceMode ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Toggle: Push Notifications */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-800">Push Notifications Global</p>
                  <p className="text-[11px] text-slate-500 font-medium">Habilita ou desabilita envios automáticos de alertas para todos os dispositivos.</p>
                </div>
                <button 
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`w-12 h-6 rounded-full transition-all relative ${pushNotifications ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pushNotifications ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </section>

          {/* Botão de Ação Final */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSaveSettings}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl active:scale-95"
            >
              <Save size={18} /> Aplicar no App
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}