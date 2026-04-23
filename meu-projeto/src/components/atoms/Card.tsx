'use client';

type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor?: string; // Adicionei opcional para manter compatibilidade com o StatsCards
};

export default function Card({ title, value, icon, bgColor }: Props) {
  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex justify-between items-center transition-all">
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        <h3 className="text-xl font-black text-slate-900 dark:text-white">{value}</h3>
      </div>
      {/* Container para o ícone com o fundo que você passar no StatsCards */}
      <div className={`p-3 rounded-xl flex items-center justify-center ${bgColor || 'bg-slate-50 dark:bg-slate-700'}`}>
        {icon}
      </div>
    </div>
  );
}