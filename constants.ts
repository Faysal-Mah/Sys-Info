import { ServiceItem, Partner } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'bureautique',
    title: 'Bureautique',
    description: 'Solutions d’impression et de gestion documentaire adaptées à votre volume de travail. Imprimantes multifonctions, scanners et logiciels de gestion.',
    image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Printer',
    features: ['Conseil en gestion de flux', 'Vente & Location', 'Installation réseau', 'Dépannage sur site']
  },
  {
    id: 'informatique',
    title: 'Informatique',
    description: 'Infrastructure IT robuste pour PME et indépendants. PC, serveurs, réseaux sécurisés et solutions cloud sur mesure.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Monitor',
    features: ['Audit & Conseil IT', 'Vente matériel pro', 'Configuration serveur', 'Support & Maintenance']
  },
  {
    id: 'caisse',
    title: 'Caisse Enregistreuse',
    description: 'Systèmes d’encaissement modernes et tactiles pour commerces et restaurants. Conformité légale et simplicité d’utilisation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000',
    iconName: 'ShoppingCart',
    features: ['Analyse des besoins', 'Systèmes tactiles', 'Paramétrage logiciel', 'Formation & Support']
  },
  {
    id: 'audiovisuel',
    title: 'Audio-visuel',
    description: 'Équipement de salles de conférence, affichage dynamique et sonorisation professionnelle pour une communication impactante.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Projector',
    features: ['Étude acoustique', 'Écrans & Projecteurs', 'Installation intégrée', 'Maintenance préventive']
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Brother', logoText: 'brother' },
  { name: 'Epson', logoText: 'EPSON' },
  { name: 'HP', logoText: 'hp' },
  { name: 'Kyocera', logoText: 'KYOCERA' },
  { name: 'Logitech', logoText: 'logitech' },
  { name: 'Microsoft', logoText: 'Microsoft' },
  { name: 'NEC', logoText: 'NEC' },
  { name: 'Netgear', logoText: 'NETGEAR' },
  { name: 'OKI', logoText: 'OKI' },
  { name: 'Philips', logoText: 'PHILIPS' },
  { name: 'Rexel', logoText: 'Rexel' },
];

export const COMPANY_INFO = {
  address_cdf: "Rue de la Serre 12, 2300 La Chaux-de-Fonds",
  address_marin: "Champs-Montants 10, 2074 Marin-Epagnier",
  phone: "032 913 00 00",
  email: "info@sys-info-demo.ch"
};