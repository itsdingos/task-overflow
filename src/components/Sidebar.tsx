'use client';

import SidebarItem from "./SidebarItem";
import { NotebookPen, Calendar, Star, CalendarClock, CheckCheck, FolderBookmark, LucideIcon, ChartLine } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  href: string;
  label: string;
  icon: LucideIcon
}

const SidebarItens = [
  {
    href: "/",
    label: "Dashbord",
    icon: ChartLine
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: NotebookPen
  },
  {
    href: "/today",
    label: "Today",
    icon: Calendar
  },
  {
    href: "/important",
    label: "Important",
    icon: Star,
  },
  {
    href: "/upcoming",
    label: "Upcoming",
    icon: CalendarClock
  },
  {
    href: "/completed",
    label: "Completed",
    icon: CheckCheck
  },
] satisfies SidebarProps[];

function Sidebar() {
  return (
    <aside className="min-h-full p-8 bg-surface-elevated border-r-2 border-r-border theme-colors flex flex-col">
      <div className="text-2xl font-bold flex items-center justify-center mt-4 mx-4 mb-8 text-primary theme-colors">
        <FolderBookmark className="mr-4" size={48}/>
        Task Overflow
      </div>
      <div className="flex flex-col items-center gap-y-1">
        {
          SidebarItens.map(({ href, label, icon }) => {
            return <SidebarItem key={href} href={href} label={label} icon={icon} />;
          })
        }
      </div>
      <hr className="w-full h-2 text-border my-10 theme-colors" />

      <ThemeToggle className="mt-auto self-end" />
    </aside>
  )
}

export default Sidebar;