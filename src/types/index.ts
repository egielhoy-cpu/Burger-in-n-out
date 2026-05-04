export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Burgers' | 'Fries' | 'Drinks' | 'Secret Menu';
  image: string;
  calories?: string;
}

export interface Location {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  distance?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}
