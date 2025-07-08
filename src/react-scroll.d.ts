declare module 'react-scroll' {
  import { ReactNode } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    activeClass?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  }

  export const Link: React.ComponentType<LinkProps>;
  export const Element: React.ComponentType<{ name: string }>;
  export const animateScroll: {
    scrollToTop: () => void;
    scrollToBottom: () => void;
    scrollTo: (to: number, options?: object) => void;
  };
} 