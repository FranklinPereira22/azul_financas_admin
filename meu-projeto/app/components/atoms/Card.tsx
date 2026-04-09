type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export default function Card({ title, value, icon }: Props) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
      {icon}
    </div>
  );
}
//franfran ama rafaela
