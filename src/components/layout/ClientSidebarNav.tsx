"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Icon as LucideIcon } from 'lucide-react';

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

interface ClientSidebarNavProps {
  navItems: NavItem[];
}

export function ClientSidebarNav({ navItems }: ClientSidebarNavProps) {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <Link href={item.href} legacyBehavior passHref>
            {/*
              The `asChild` prop is not directly on SidebarMenuButton in the shadcn/ui/sidebar.
              The button itself is the component. We pass `data-active` for styling.
            */}
            <SidebarMenuButton
              data-active={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
              className="justify-start"
            >
              <item.icon className="h-5 w-5 mr-2" />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
