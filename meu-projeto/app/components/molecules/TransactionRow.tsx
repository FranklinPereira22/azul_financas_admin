type Props = {
  name: string;
  value: string | number;
};

export default function TransactionRow({ name, value }: Props) {
  return (
    <div className="flex justify-between bg-gray-100 p-3 rounded-xl">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}