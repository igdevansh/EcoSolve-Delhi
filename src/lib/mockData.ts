import type { Project, LocalResource, WasteData, ChartDataPoint } from '@/lib/types';
import { TrendingUp, TrendingDown, Package, Recycle, ShoppingBag, Users, MapPin, Wrench, Trash2, Target, Lightbulb } from 'lucide-react';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Bio-Packaging Initiative',
    description: 'Developing biodegradable packaging from agricultural waste to replace single-use plastics in local markets.',
    imageUrl: 'https://placehold.co/400x300.png',
    author: 'Green Innovators Team',
    tags: ['biodegradable', 'packaging', 'waste reduction'],
    dataAiHint: 'eco packaging'
  },
  {
    id: '2',
    title: 'Community Refill Station',
    description: 'A student-led project setting up a refill station for common household liquids like soaps and detergents.',
    imageUrl: 'https://placehold.co/400x300.png',
    author: 'Eco Warriors Club',
    tags: ['reusable', 'community', 'zero waste'],
    dataAiHint: 'refill station'
  },
  {
    id: '3',
    title: 'Upcycled Art Exhibition',
    description: 'An art exhibition showcasing pieces made entirely from plastic waste, raising awareness about plastic pollution.',
    imageUrl: 'https://placehold.co/400x300.png',
    author: 'Art for Earth',
    tags: ['upcycling', 'art', 'awareness'],
    dataAiHint: 'recycled art'
  },
  {
    id: '4',
    title: 'Microplastic Filter for Washing Machines',
    description: 'A DIY guide and prototype for a filter that captures microplastics shed from clothes during washing.',
    imageUrl: 'https://placehold.co/400x300.png',
    author: 'Sustainable Solutions Group',
    tags: ['microplastics', 'filtration', 'diy'],
    dataAiHint: 'water filter'
  },
];

export const mockLocalResources: LocalResource[] = [
  {
    id: '1',
    name: 'GreenCycle Recycling Center',
    type: 'Recycling Center',
    address: '123 Eco Lane, Greentown, GT 54321',
    contact: 'info@greencycle.com',
    website: 'www.greencycle.com',
    operatingHours: 'Mon-Sat: 9 AM - 5 PM',
    details: 'Accepts plastics #1-5, paper, cardboard, glass, and metal cans. Drive-through drop-off available.',
    icon: Recycle,
  },
  {
    id: '2',
    name: 'The Earthly Goods Store',
    type: 'Eco Shop',
    address: '45 Sustainable St, Greentown, GT 54322',
    website: 'www.earthlygoods.com',
    operatingHours: 'Tue-Sun: 10 AM - 6 PM',
    details: 'Offers a wide range of package-free goods, reusable containers, and eco-friendly household products.',
    icon: ShoppingBag,
  },
  {
    id: '3',
    name: 'Greentown Community Compost Program',
    type: 'Community Program',
    address: 'Greentown Community Garden, Park Rd',
    contact: 'compost@greentown.gov',
    details: 'Weekly drop-off for organic waste. Workshops on composting offered monthly.',
    icon: Users,
  },
  {
    id: '4',
    name: 'City Waste Collection Point (Plastics)',
    type: 'Waste Collection Point',
    address: 'North Transfer Station, Industrial Ave',
    operatingHours: 'Mon-Fri: 8 AM - 4 PM',
    details: 'Designated collection point for sorted hard-to-recycle plastics and bulk plastic items.',
    icon: Trash2,
  },
  {
    id: '5',
    name: 'Repair Cafe Greentown',
    type: 'Repair Cafe',
    address: 'Community Hall, 10 Civic Center',
    website: 'www.repaircafegreentown.org',
    operatingHours: 'First Saturday of each month, 10 AM - 2 PM',
    details: 'Volunteer-run initiative to repair broken household items, reducing waste and promoting reuse.',
    icon: Wrench,
  },
];

export const mockWasteMetrics: WasteData[] = [
  { id: '1', metric: 'Monthly Plastic Waste', value: 1250, unit: 'kg', change: '-5%', icon: Trash2 },
  { id: '2', metric: 'Recycling Rate', value: '45', unit: '%', change: '+2%', icon: Recycle },
  { id: '3', metric: 'Alternatives Implemented', value: 15, unit: 'projects', icon: Lightbulb },
  { id: '4', metric: 'Reduction Goal Progress', value: '60', unit: '% of target', icon: Target },
];

export const mockWasteByTypeData: ChartDataPoint[] = [
  { name: 'PET', value: 40, fill: 'hsl(var(--chart-1))' },
  { name: 'HDPE', value: 25, fill: 'hsl(var(--chart-2))' },
  { name: 'PVC', value: 10, fill: 'hsl(var(--chart-3))' },
  { name: 'LDPE', value: 15, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 10, fill: 'hsl(var(--chart-5))' },
];

export const mockReductionProgressData: { name: string, saved: number, target: number }[] = [
  { name: 'Jan', saved: 50, target: 80 },
  { name: 'Feb', saved: 65, target: 85 },
  { name: 'Mar', saved: 70, target: 90 },
  { name: 'Apr', saved: 80, target: 95 },
  { name: 'May', saved: 90, target: 100 },
  { name: 'Jun', saved: 105, target: 105 },
];
