import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  icon?: React.ReactNode;
  label?: string;
  size?: 'md' | 'lg';
}

export const Select: React.FC<SelectProps> = ({
  options,
  icon,
  label,
  size = 'md',
  className = '',
  id,
  ...props
}) => {
  const isLg = size === 'lg';

  return (
    <div className={`relative flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-[#4B5563]">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute right-3.5 pointer-events-none text-[#6B7280]">
            {icon}
          </div>
        )}

        <select
          id={id}
          className={`w-full appearance-none bg-white text-[#1E1B4B] border border-[#E8E5EE] hover:border-[#C4B5FD] focus:border-[#3B1B7A] focus:ring-2 focus:ring-[#3B1B7A]/20 transition-all rounded-xl cursor-pointer ${
            icon ? (isLg ? 'pr-11' : 'pr-10') : 'pr-4'
          } pl-10 ${isLg ? 'py-3.5 text-base' : 'py-2.5 text-sm'} outline-none`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Outline Chevron */}
        <div className="absolute left-3.5 pointer-events-none text-[#6B7280]">
          <ChevronDown className="w-4 h-4" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
};
