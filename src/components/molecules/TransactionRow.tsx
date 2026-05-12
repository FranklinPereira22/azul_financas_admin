'use client';

type Props = {
  name: string;
  value: string | number;
};

export default function TransactionRow({ name, value }: Props) {
  return (
    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-transparent dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900/50 transition-all group">
      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </span>
      <span className="text-sm font-black text-slate-900 dark:text-white transition-colors">
        {value}
      </span>
    </div>
  );
}