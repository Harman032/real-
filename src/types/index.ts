export type PropertyType = 'Villa' | 'Apartment' | 'Plot' | 'Penthouse' | 'Mansion';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: PropertyType;
  beds: number;
  baths: number;
  area: number;
  images: string[];
  features: string[];
  isFeatured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
