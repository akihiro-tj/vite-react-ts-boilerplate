import { Logo } from './components/Logo';

export const BREAK_POINT = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const LOGO: { [key: string]: Logo } = {
  vite: {
    href: 'https://vitejs.dev',
    src: 'vite.svg',
    alt: 'Vite Logo',
    shadowColor: 'var(--color-vite-logo)',
  },
  react: {
    href: 'https://reactjs.org',
    src: 'react.svg',
    alt: 'React Logo',
    shadowColor: 'var(--color-react-logo)',
    isRotating: true,
  },
};
