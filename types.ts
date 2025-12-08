export type ViewState = 'HOME' | 'OFFER';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface Partner {
  name: string;
  logoText: string; // Using text representation for reliability without external assets
}

export interface NavLink {
  label: string;
  href: string; // treated as anchor ID
}