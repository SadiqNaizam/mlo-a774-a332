import React from 'react';
import { Button as ShadcnButton, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <ShadcnButton
      className={cn('w-full h-11 text-base font-semibold', className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
