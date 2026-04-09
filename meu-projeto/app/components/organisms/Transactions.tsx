import TransactionRow from "../molecules/TransactionRow";

export default function Transactions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="font-semibold mb-4">Últimas Transações</h3>

      <div className="space-y-3 text-sm">
        <TransactionRow name="Pagamento" value="R$ 200" />
        <TransactionRow name="Recebimento" value="R$ 500" />
        <TransactionRow name="Compra" value="R$ 120" />
      </div>
    </div>
  );
}