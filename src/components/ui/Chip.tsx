import React from 'react';

export interface ChipProps {
  label: string;
  variant?: 'workshop' | 'course' | 'event' | 'neutral' | 'active' | 'inactive';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  count?: number;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'neutral',
  icon,
  onClick,
  className = '',
  count,
}) => {
  const isInteractive = Boolean(onClick);

  const variantStyles = {
    // Category badges
    workshop: 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]/80',
    course: 'bg-[#EFF6FF] text-[#1E40AF] border border-[#DBEAFE]/80',
    event: 'bg-[#FAF5FF] text-[#6B21A8] border border-[#F3E8FF]/80',
    // General neutral
    neutral: 'bg-[#F4F1FA] text-[#3B1B7A] border border-[#E8E5EE]',
    // Interactive filter states
    active: 'bg-[#3B1B7A] text-white border border-[#3B1B7A] shadow-sm',
    inactive: 'bg-white text-[#4B5563] border border-[#E8E5EE] hover:bg-[#F9F8FD] hover:text-[#1E1B4B]',
  }[variant];

  const Component = isInteractive ? 'button' : 'span';

  return (
    <Component
      type={isInteractive ? 'button' : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-150 select-none whitespace-nowrap shrink-0 ${
        isInteractive ? 'cursor-pointer active:scale-95' : ''
      } ${variantStyles} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`text-[11px] px-1.5 py-0.2 rounded-md ${
            variant === 'active' ? 'bg-white/20 text-white' : 'bg-black/5 text-[#4B5563]'
          }`}
        >
          {count}
        </span>
      )}
    </Component>
  );
};
