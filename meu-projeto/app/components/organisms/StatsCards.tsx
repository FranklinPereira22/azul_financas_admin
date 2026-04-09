'use client';

import { DollarSign, Users, BarChart3 } from "lucide-react";
import Card from "../atoms/Card";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card 
        title="Receita Total" 
        value="R$ 25.000,00" 
        icon={<DollarSign size={20} className="text-emerald-600" />} 
        bgColor="bg-emerald-50"
      />
      <Card 
        title="Usuários Ativos" 
        value="1.245" 
        icon={<Users size={20} className="text-blue-600" />} 
        bgColor="bg-blue-50"
      />
      <Card 
        title="Relatórios" 
        value="320" 
        icon={<BarChart3 size={20} className="text-purple-600" />} 
        bgColor="bg-purple-50"
      />
    </div>
  );
}