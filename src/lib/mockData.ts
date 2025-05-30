import type { Project, LocalResource, WasteData, ChartDataPoint } from '@/lib/types';
import { Recycle, ShoppingBag, Users, Trash2, Lightbulb, Target, Wrench, MapPin, Leaf, LayoutDashboard, GalleryThumbnails } from 'lucide-react';

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
    id: 'goonj-mayur-vihar',
    name: 'Goonj Dropping Centre – Mayur Vihar Phase 2',
    type: 'Recycling Center',
    address: '277, Pocket C, Mayur Vihar Phase 2, Delhi 110091',
    contact: 'Ashwani Mittal – 9810523923; Agam Mittal – 8130341296',
    website: undefined, // No website provided in the source
    operatingHours: 'Mon–Sat: 11 AM–4 PM; Sun: 8 AM–11 AM',
    details: 'Accepts clothes, paper, and household materials for reuse and recycling.',
    icon: Recycle,
  },
  {
    id: 'jaagruti-recycling',
    name: 'JAAGRUTI – Waste Paper Recycling Services',
    type: 'Recycling Center',
    address: 'Contact for address', // Address not specified
    contact: '+919810191625',
    website: 'https://we-recycle.org',
    operatingHours: undefined, // Timings not specified
    details: 'Offers waste paper recycling services for organizations and individuals. Email: paper@we-recycle.org.',
    icon: Recycle,
  },
  {
    id: 'pom-pom-recycling',
    name: 'Pom Pom',
    type: 'Recycling Center',
    address: 'F 27/2, First Floor, Okhla Phase II, Okhla Industrial Area, Delhi',
    contact: '+919599781512',
    website: undefined, // No website provided in the source other than zoobop.com as a mention
    operatingHours: undefined, // Timings not specified
    details: 'Collects paper, plastic, glass, and metal for recycling.',
    icon: Recycle,
  },
  {
    id: 'amul-organic-mayur-vihar',
    name: 'Amul Organic Store – Mayur Vihar',
    type: 'Eco Shop',
    address: 'Mayur Vihar, Delhi (Contact for full address)', // Full address not specified
    contact: undefined, // Contact not specified
    website: undefined, // Website not specified
    operatingHours: undefined, // Timings not specified
    details: "Amul's first exclusive organic store in Delhi, offering certified organic products like wheat flour, pulses, and rice.",
    icon: ShoppingBag,
  },
  {
    id: 'a-one-stationery',
    name: 'A-One Stationery & Gifts Hub',
    type: 'Eco Shop',
    address: '179 A, Pocket C, Mayur Vihar Phase 2, Delhi 110091',
    contact: undefined, // Contact not specified
    website: 'http://a1stationerygiftshub.link',
    operatingHours: undefined, // Timings not specified
    details: 'Offers eco-friendly stationery items, including recycled paper products and biodegradable pencils.',
    icon: ShoppingBag,
  },
  {
    id: 'kabadi-xpress',
    name: 'Kabadi-Xpress',
    type: 'Community Program',
    address: 'Doorstep service in Delhi', // Service area, not a fixed address
    contact: '7065204242',
    website: 'https://kabadi-xpress.com',
    operatingHours: 'By appointment', // Inferred
    details: 'Provides doorstep scrap collection services in Delhi, ensuring materials are sent to authentic recycling facilities.',
    icon: Users,
  },
  {
    id: 'chintan-group',
    name: 'Chintan Environmental Research and Action Group',
    type: 'Community Program',
    address: 'C-14, Lajpat Nagar III, Second Floor, New Delhi 110024',
    contact: '180030007969',
    website: undefined, // Website not specified
    operatingHours: undefined, // Timings not specified
    details: 'Engages in waste management, recycling, and environmental education programs.',
    icon: Users,
  },
];

export const mockWasteMetrics: WasteData[] = [
  { id: '1', metric: 'Delhi: Monthly Plastic Waste', value: 1250, unit: 'kg', change: '-5%', icon: Trash2 },
  { id: '2', metric: 'Delhi: Recycling Rate', value: '45', unit: '%', change: '+2%', icon: Recycle },
  { id: '3', metric: 'Delhi: Eco Initiatives', value: 15, unit: 'projects', icon: Lightbulb },
  { id: '4', metric: 'Delhi: Waste Reduction Goal', value: '60', unit: '% of target', icon: Target },
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
