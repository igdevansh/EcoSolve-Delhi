import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
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

export const metadata: Metadata = {
  title: 'EcoSolve-Delhi',
  description: 'An application to help reduce plastic use and promote sustainable alternatives in Delhi.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const navItems = [
  { href: '/', label: 'Dashboard', icon: 'LayoutDashboard' },
  { href: '/material-suggestion', label: 'Material Suggestion', icon: 'Lightbulb' },
  { href: '/local-resources', label: 'Local Resources', icon: 'MapPin' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen={false} collapsible="offcanvas">
          <Sidebar side="left"> {/* Explicitly set side, though "left" is default */}
            <SidebarHeader className="p-4">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" style={{color: 'hsl(var(--sidebar-primary))'}}>
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
               <SidebarTrigger /> {/* Removed md:hidden to make it always visible */}
            </header>
            <main className="flex-1 p-4 md:p-6 overflow-auto">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
