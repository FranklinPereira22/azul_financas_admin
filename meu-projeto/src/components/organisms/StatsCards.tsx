'use client';

import { DollarSign, Users, BarChart3 } from "lucide-react";
import Card from "../atoms/Card";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 px-4 md:px-0">
      <Card 
        title="Receita Total" 
        value="R$ 25.000,00" 
        // Adicionamos dark:text-emerald-400
        icon={<DollarSign size={20} className="text-emerald-600 dark:text-emerald-400" />} 
        // Adicionamos dark:bg-emerald-900/30 (fundo escuro com transparência)
        bgColor="bg-emerald-50 dark:bg-emerald-900/30"
      />
      <Card 
        title="Usuários Ativos" 
        value="1.245" 
        icon={<Users size={20} className="text-blue-600 dark:text-blue-400" />} 
        bgColor="bg-blue-50 dark:bg-blue-900/30"
      />
      <Card 
        title="Relatórios" 
        value="320" 
        icon={<BarChart3 size={20} className="text-purple-600 dark:text-purple-400" />} 
        bgColor="bg-purple-50 dark:bg-purple-900/30"
      />
    </div>
  );
}