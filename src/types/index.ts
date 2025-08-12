// Button component types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Image types
export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

// Menu item types
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

// Gallery types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}
