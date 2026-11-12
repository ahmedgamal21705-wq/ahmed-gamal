/**
 * Design Tokens for AFAQ (آفاق) - Youth Platform in Fayoum
 * Defined according to the Brand Style Board and visual identity
 */

export const tokens = {
  colors: {
    // Primary Brand Colors (Deep Purple / Indigo from brand board)
    primary: {
      DEFAULT: '#3B1B7A',
      hover: '#4D259E',
      dark: '#270F56',
      light: '#5229A8',
      surface: '#F4F1FA',
    },
    // Vibrant Warm Orange Accent (From brand board)
    accent: {
      DEFAULT: '#F7931E',
      hover: '#E5810D',
      light: '#FFF4E6',
      dark: '#C96B07',
    },
    // Highlight / Featured Turquoise (Teal accent for special buttons & featured badges)
    turquoise: {
      DEFAULT: '#0891B2',
      hover: '#0E7490',
      light: '#ECFEFF',
      dark: '#155E75',
    },
    // Neutral Canvas & Surface
    neutral: {
      canvas: '#FAFAF7',       // Warm off-white from brand board #FAFAF7
      card: '#FFFFFF',
      cardAlt: '#F9F8FD',
      border: '#E8E5EE',
      borderSubtle: '#F0EEF6',
      textPrimary: '#1E1B4B',   // Deep readable navy/indigo
      textSecondary: '#4B5563', // Slate gray
      textMuted: '#6B7280',
    },
    // Category thematic colors
    category: {
      workshop: {
        bg: '#FEF3C7',
        text: '#92400E',
        border: '#FDE68A',
        label: 'ورشة عمل',
      },
      course: {
        bg: '#EFF6FF',
        text: '#1E40AF',
        border: '#DBEAFE',
        label: 'دورة تدريبية',
      },
      event: {
        bg: '#FAF5FF',
        text: '#6B21A8',
        border: '#F3E8FF',
        label: 'فعالية شبابية',
      },
    },
  },
  typography: {
    fontFamily: "'Cairo', system-ui, -apple-system, sans-serif",
  },
  shadows: {
    card: '0 2px 12px -2px rgba(59, 27, 122, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
    cardHover: '0 12px 28px -6px rgba(59, 27, 122, 0.16), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
    header: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
  },
} as const;

export type EventCategoryKey = 'workshop' | 'course' | 'event';
