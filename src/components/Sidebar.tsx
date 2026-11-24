'use client';

import SidebarItem from "./SidebarItem";

const SidebarItens = [
  {
    href: "/",
    label: "Tasks"
  },
  {
    href: "/today",
    label: "Today"
  },
  {
    href: "/important",
    label: "Important"
  },
  {
    href: "/week",
    label: "This Week"
  },
  {
    href: "/upcoming",
    label: "Upcoming"
  },
  {
    href: "/completed",
    label: "Completed"
  },
]

function Sidebar() {
  return (
    <aside className="flex flex-col bg-surface-elevated
      min-w-64 min-h-full p-4 items-center
      border-r-2 border-r-border">
      {
        SidebarItens.map(({ href, label }) => {
          return <SidebarItem key={href} href={href} label={label} />;
        })
      }
    </aside>
  )
}

export default Sidebar;