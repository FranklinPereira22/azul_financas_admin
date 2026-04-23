'use client';

import TransactionRow from "../molecules/TransactionRow";

export default function Transactions() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-6 transition-colors">
        Últimas Transações
      </h3>

      <div className="space-y-4">
        {/* Passando props extras para o TransactionRow se necessário */}
        <TransactionRow name="Pagamento de Energia" value="R$ 200,00" type="saida" date="Hoje" />
        <TransactionRow name="Recebimento Freelance" value="R$ 500,00" type="entrada" date="Ontem" />
        <TransactionRow name="Compra Amazon" value="R$ 120,00" type="saida" date="02 Abr" />
      </div>
    </div>
  );
}