import Link from "next/link";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

export default function NavItem({ label, icon, href, active }: NavItemProps) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-2 p-3 rounded-xl font-bold transition-all ${
        active 
          ? "bg-blue-50 text-blue-600 shadow-sm" // Estilo quando selecionado
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900" // Estilo normal
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}