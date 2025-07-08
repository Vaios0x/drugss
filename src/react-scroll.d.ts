declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    spy?: boolean;
    activeClass?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    containerId?: string;
    activeStyle?: React.CSSProperties;
    hashSpy?: boolean;
    isDynamic?: boolean;
    ignoreCancelEvents?: boolean;
  }

  export const Link: React.ComponentType<LinkProps>;

  export interface ScrollProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    spy?: boolean;
    hashSpy?: boolean;
    isDynamic?: boolean;
  }

  export function scrollTo(options: ScrollProps): void;
  export function animateScroll: {
    scrollToTop(options?: ScrollProps): void;
    scrollToBottom(options?: ScrollProps): void;
    scrollTo(options: ScrollProps): void;
  };
} 