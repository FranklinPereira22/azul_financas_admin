'use client';

import { useState } from "react";
import { 
  Settings as SettingsIcon, Bell, Smartphone, 
  Lock, Save, Globe, Palette 
} from "lucide-react";
import Sidebar from "../../../components/organisms/Sidebar";
import DashboardLayout from "../../../components/templates/DashboardLayout";

export default function SettingsPage() {
  const [appName, setAppName] = useState("Azul Finanças");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleSaveSettings = () => {
    alert("Configurações sincronizadas com o App Mobile!");
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="max-w-4xl animate-in fade-in duration-500 transition-colors duration-300">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Ajustes do App</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Controle as variáveis globais do seu aplicativo mobile.</p>
        </div>

        <div className="space-y-6">
          {/* Card: Identidade do App */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <Smartphone size={20} />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Interface Mobile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Nome do Aplicativo</label>
                <input 
                  type="text" 
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Cor Principal (Hex)</label>
                <div className="flex gap-2">
                  <div className="w-11 h-11 bg-blue-600 rounded-xl border border-slate-200 dark:border-slate-700" />
                  <input 
                    type="text" 
                    placeholder="#2563EB"
                    className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Card: Controle de Sistema */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <SettingsIcon size={20} />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Sistema e Notificações</h3>
            </div>

            <div className="space-y-4">
              {/* Toggle: Modo Manutenção */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Modo Manutenção</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-500 font-medium">Impede o acesso de usuários ao app mobile durante atualizações.</p>
                </div>
                <button 
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`w-12 h-6 rounded-full transition-all relative ${maintenanceMode ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${maintenanceMode ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Toggle: Push Notifications */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Push Notifications Global</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-500 font-medium">Habilita ou desabilita envios automáticos de alertas para todos os dispositivos.</p>
                </div>
                <button 
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`w-12 h-6 rounded-full transition-all relative ${pushNotifications ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}
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
              className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-xl dark:shadow-none active:scale-95"
            >
              <Save size={18} /> Aplicar no App
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}