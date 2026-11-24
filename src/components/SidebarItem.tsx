'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

function SidebarItem({ href, label, icon }: SidebarItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`
      text-text-primary m-2 p-2 text-left min-w-full rounded-lg
        transition-all duration-300 ease-in-out
        ${pathname === href
          ? "bg-primary"
          : "bg-transparent hover:bg-secondary"
        }
      `}>
      {label}
    </Link>
  )
}

export default SidebarItem;