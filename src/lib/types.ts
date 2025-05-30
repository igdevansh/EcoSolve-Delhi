import type { Icon as LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  tags?: string[];
  dataAiHint?: string;
}

export interface LocalResource {
  id: string;
  name: string;
  type: 'Recycling Center' | 'Eco Shop' | 'Community Program' | 'Waste Collection Point' | 'Repair Cafe';
  address: string;
  contact?: string;
  website?: string;
  operatingHours?: string;
  details: string;
  icon: LucideIcon;
}

export interface WasteData {
  id: string;
  metric: string;
  value: string | number;
  unit?: string;
  change?: string; // e.g., "+5%" or "-10kg"
  icon?: LucideIcon;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string; // For specific bar/segment colors in charts
}
