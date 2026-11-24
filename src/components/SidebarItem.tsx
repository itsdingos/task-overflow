'use client';

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  label: string;
  icon?: LucideIcon;
}

function SidebarItem({ href, label, icon }: SidebarItemProps) {
  const pathname = usePathname();
  const Icon = icon;

  return (
    <Link
      href={href}
      className={`
        flex items-center
        text-text-primary px-4 py-2 min-w-full text-left rounded-lg
        relative isolate overflow-hidden transition-colors duration-300
        ${pathname === href
          ? "bg-secondary"
          : `
            before:absolute before:inset-0
            before:-z-10
            before:origin-left
            before:scale-x-0
            before:rounded-lg
            before:bg-secondary
            before:opacity-0
            before:transition-all
            before:duration-200
            before:ease-linear
            hover:before:scale-x-100
            hover:before:opacity-50
          `
        }
      `}
    >
      {Icon && <Icon className="mr-2 text-primary"/>}
      {label}
    </Link>
  )
}

export default SidebarItem;