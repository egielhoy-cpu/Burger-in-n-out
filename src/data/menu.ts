import { MenuItem, Location, Testimonial } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'double-double',
    name: 'Double-Double®',
    description: 'Two 100% American Beef patties, hand-leafed lettuce, tomato, slice of onion, and two slices of real American cheese on a freshly baked bun.',
    price: '$4.95',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    calories: '610 cal'
  },
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    description: '100% American Beef patty, lettuce, tomato, onion, and a slice of real American cheese.',
    price: '$3.45',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop',
    calories: '410 cal'
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    description: '100% American Beef patty, lettuce, tomato, and onion on a freshly baked bun.',
    price: '$2.95',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
    calories: '310 cal'
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description: 'Fresh, hand-cut potatoes prepared in 100% vegetable oil.',
    price: '$2.15',
    category: 'Fries',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1000&auto=format&fit=crop',
    calories: '370 cal'
  },
  {
    id: 'animal-style-fries',
    name: 'Animal Style Fries',
    description: 'Fries topped with cheese, our signature spread, and grilled onions.',
    price: '$4.25',
    category: 'Secret Menu',
    image: 'https://images.unsplash.com/photo-1623238913973-21e45cced554?q=80&w=1000&auto=format&fit=crop',
    calories: '550 cal'
  },
  {
    id: 'shake-chocolate',
    name: 'Chocolate Shake',
    description: 'Made with real ice cream.',
    price: '$2.85',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop',
    calories: '580 cal'
  },
  {
    id: 'shake-strawberry',
    name: 'Strawberry Shake',
    description: 'Made with real ice cream.',
    price: '$2.85',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?q=80&w=1000&auto=format&fit=crop',
    calories: '590 cal'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'loc-1',
    address: '7009 Sunset Blvd',
    city: 'Hollywood',
    state: 'CA',
    zip: '90028',
    phone: '800-786-1000',
    hours: '10:30 AM - 1:00 AM',
    distance: '1.2 miles'
  },
  {
    id: 'loc-2',
    address: '9149 S Sepulveda Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90045',
    phone: '800-786-1000',
    hours: '10:30 AM - 1:30 AM',
    distance: '3.5 miles'
  },
  {
    id: 'loc-3',
    address: '13850 Francisquito Ave',
    city: 'Baldwin Park',
    state: 'CA',
    zip: '91706',
    phone: '800-786-1000',
    hours: '10:30 AM - 1:00 AM',
    distance: '15.2 miles'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah J.',
    comment: 'Best burger on the planet. Fresh ingredients and the service is always top-notch!',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Mark T.',
    comment: 'Animal style fries are a game-changer. I wish they were everywhere!',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Elena R.',
    comment: 'The classic Double-Double is my go-to every time. Quality you can taste indeed.',
    rating: 5
  }
];
