import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @interface MainAppLayoutProps
 * @description Props for the MainAppLayout component.
 * @property {React.ReactNode} children - The content to be rendered within the layout.
 * @property {string} [className] - Optional additional CSS classes to apply to the layout container.
 */
interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout Component
 * @description A full-screen, flex-based layout that centers its children both vertically and horizontally.
 * This serves as the primary container for pages that require centered content, like the login page.
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
