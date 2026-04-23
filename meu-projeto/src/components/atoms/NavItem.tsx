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
      className={`flex items-center gap-3 p-3 rounded-xl font-bold transition-all ${
        active 
          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm" 
          : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
      }`}
    >
      <span className={active ? "text-blue-600 dark:text-blue-400" : ""}>
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </Link>
  );
}