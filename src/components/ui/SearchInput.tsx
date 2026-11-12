import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
  size?: 'md' | 'lg';
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'ابحث باسم الورشة، الدورة، أو المجال في الفيوم...',
  className = '',
  size = 'md',
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      e.preventDefault();
      onSubmit();
    }
  };

  const isLg = size === 'lg';

  return (
    <div className={`relative flex items-center w-full group ${className}`}>
      {/* Search outline icon */}
      <div className="absolute right-3.5 pointer-events-none text-[#6B7280] group-focus-within:text-[#3B1B7A] transition-colors">
        <Search className={isLg ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={1.8} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full bg-white text-[#1E1B4B] placeholder:text-[#9CA3AF] border border-[#E8E5EE] group-hover:border-[#C4B5FD] focus:border-[#3B1B7A] focus:ring-2 focus:ring-[#3B1B7A]/20 transition-all rounded-xl ${
          isLg ? 'pr-11 pl-10 py-3.5 text-base' : 'pr-10 pl-9 py-2.5 text-sm'
        } outline-none`}
      />

      {/* Clear input button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute left-3 p-1 text-[#9CA3AF] hover:text-[#3B1B7A] rounded-md transition-colors"
          aria-label="مسح البحث"
        >
          <X className="w-4 h-4" strokeWidth={1.8} />
        </button>
      )}
    </div>
  );
};
