"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, Lightbulb, MapPin, type Icon as LucideIcon } from 'lucide-react';

// Map string identifiers to actual icon components
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Lightbulb,
  MapPin,
};

type NavItem = {
  href: string;
  label: string;
  icon: string; // Now a string identifier
};

interface ClientSidebarNavProps {
  navItems: NavItem[];
}

export function ClientSidebarNav({ navItems }: ClientSidebarNavProps) {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        const Icon = iconMap[item.icon];
        if (!Icon) {
          // Optional: handle case where icon is not found
          return null; 
        }
        return (
          <SidebarMenuItem key={item.label}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                data-active={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                className="justify-start"
              >
                <Icon className="h-5 w-5 mr-2" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
