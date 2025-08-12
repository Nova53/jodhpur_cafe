// Color constants
export const COLORS = {
  primary: '#F5652F',
  primaryHover: '#E55A2A',
  secondary: '#6B7280',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
} as const;

// Route constants
export const ROUTES = {
  home: '/',
  about: '/about',
  catering: '/catering',
  location: '/location',
  gallery: '/gallery',
  contact: '/contact',
} as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'HOME', href: ROUTES.home },
  { name: 'ABOUT US', href: ROUTES.about },
  { name: 'CATERING', href: ROUTES.catering },
  { name: 'LOCATION', href: ROUTES.location },
] as const;

// Button variants
export const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
} as const;

// Button sizes
export const BUTTON_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
