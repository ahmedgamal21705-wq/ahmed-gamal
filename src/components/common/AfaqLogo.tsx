import React from 'react';

export interface AfaqLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const AfaqLogo: React.FC<AfaqLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
  size = 'md',
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#3B1B7A';
  const accentColor = '#F7931E'; // Brand warm orange
  const mutedColor = isWhite ? 'rgba(255, 255, 255, 0.75)' : '#6B7280';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG: Figure reaching to star with orange swoop */}
      <div className={`relative ${iconSizes} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Orange energy swoop */}
          <path
            d="M 12 75 C 32 88, 75 75, 88 42 C 80 58, 48 70, 26 65 Z"
            fill={accentColor}
          />
          {/* Lower purple curve */}
          <path
            d="M 24 82 C 45 92, 70 82, 78 72 C 60 78, 38 78, 24 82 Z"
            fill={textColor}
          />
          {/* Stylized aspiring youth figure */}
          {/* Head */}
          <circle cx="61" cy="28" r="9" fill={textColor} />
          {/* Dynamic body reaching up-right */}
          <path
            d="M 38 60 C 45 48, 56 38, 72 32 C 66 45, 60 55, 52 66 C 45 74, 34 70, 38 60 Z"
            fill={textColor}
          />
          {/* Reaching arm */}
          <path
            d="M 58 37 C 65 31, 74 24, 79 17 C 80 23, 76 31, 70 37 Z"
            fill={accentColor}
          />
          {/* The Future Star (4-pointed star) */}
          <path
            d="M 83 8 L 85 16 L 93 18 L 85 20 L 83 28 L 81 20 L 73 18 L 81 16 Z"
            fill={accentColor}
          />
        </svg>
      </div>

      {/* Typography: "آفاق" and optional subtext */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black tracking-tight ${textSizes}`}
            style={{ color: textColor }}
          >
            آفـاق
          </span>
          <span
            className="text-xs font-bold tracking-widest uppercase opacity-80"
            style={{ color: accentColor }}
          >
            Afaq
          </span>
        </div>
        {showTagline && (
          <span
            className="text-[10px] font-medium tracking-tight mt-0.5"
            style={{ color: mutedColor }}
          >
            طور نفسك .. اصنع مستقبلك
          </span>
        )}
      </div>
    </div>
  );
};
