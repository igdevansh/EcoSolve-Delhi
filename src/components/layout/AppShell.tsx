"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { ClientSidebarNav } from '@/components/layout/ClientSidebarNav';

const navItems = [
  { href: '/', label: 'Dashboard', icon: 'LayoutDashboard' },
  { href: '/material-suggestion', label: 'Material Suggestion', icon: 'Lightbulb' },
  { href: '/local-resources', label: 'Local Resources', icon: 'MapPin' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false} collapsible="offcanvas">
      <Sidebar side="left">
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" style={{ color: 'hsl(var(--sidebar-primary))' }}>
            <Leaf className="h-6 w-6" />
            <span>EcoSolve</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <ClientSidebarNav navItems={navItems} />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-4 border-b bg-background px-4 sm:px-6">
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
