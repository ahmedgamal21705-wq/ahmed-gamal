import React from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'turquoise' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap shrink-0';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    // Primary: Brand Royal Purple (#3B1B7A)
    primary:
      'bg-[#3B1B7A] hover:bg-[#4D259E] active:bg-[#270F56] text-white shadow-sm hover:shadow focus-visible:ring-[#3B1B7A]',
    // Accent: Brand Vibrant Orange (#F7931E)
    accent:
      'bg-[#F7931E] hover:bg-[#E5810D] active:bg-[#C96B07] text-white shadow-sm hover:shadow focus-visible:ring-[#F7931E]',
    // Turquoise: Highlighted Actions (#0891B2)
    turquoise:
      'bg-[#0891B2] hover:bg-[#0E7490] active:bg-[#155E75] text-white shadow-sm hover:shadow focus-visible:ring-[#0891B2]',
    // Outline: Clean bordered
    outline:
      'border-2 border-[#3B1B7A]/20 hover:border-[#3B1B7A] text-[#3B1B7A] bg-white hover:bg-[#F4F1FA] focus-visible:ring-[#3B1B7A]',
    // Ghost: Subtle hover
    ghost:
      'text-[#3B1B7A] hover:bg-[#3B1B7A]/10 active:bg-[#3B1B7A]/15 focus-visible:ring-[#3B1B7A]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'start' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
