import React, { useState } from 'react';
import { AfaqLogo } from '../common/AfaqLogo';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight } from 'lucide-react';

export interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onLoginClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = '/',
  onNavigate,
  onLoginClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          className="flex items-center gap-2 select-none shrink-0"
          aria-label="آفاق - الصفحة الرئيسية"
        >
          <AfaqLogo size="md" showTagline={true} />
        </a>

        {/* Zone 2: Navigation Links (الرئيسية، الفعاليات) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className={`transition-colors py-1 relative whitespace-nowrap shrink-0 ${
              currentPath === '/'
                ? 'text-[#3B1B7A] font-bold after:content-[""] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#3B1B7A]'
                : 'text-[#4B5563] hover:text-[#3B1B7A]'
            }`}
          >
            الرئيسية
          </a>

          <a
            href="/events"
            onClick={(e) => handleNavClick('/events', e)}
            className={`transition-colors py-1 relative whitespace-nowrap shrink-0 ${
              currentPath.startsWith('/events')
                ? 'text-[#3B1B7A] font-bold after:content-[""] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#3B1B7A]'
                : 'text-[#4B5563] hover:text-[#3B1B7A]'
            }`}
          >
            الفعاليات
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (زر «تسجيل الدخول») */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button
            variant="primary"
            size="md"
            onClick={() => onLoginClick?.()}
            className="font-bold"
          >
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onLoginClick?.()}
            className="text-xs px-3 py-1.5 font-bold"
          >
            دخول
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4B5563] hover:text-[#3B1B7A] rounded-xl hover:bg-[#F4F1FA] transition-colors"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.8} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E5EE] bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm ${
              currentPath === '/'
                ? 'bg-[#F4F1FA] text-[#3B1B7A]'
                : 'text-[#4B5563] hover:bg-slate-50'
            }`}
          >
            <span>الرئيسية</span>
            <ArrowRight className="w-4 h-4 text-[#9CA3AF] rotate-180" strokeWidth={1.8} />
          </a>

          <a
            href="/events"
            onClick={(e) => handleNavClick('/events', e)}
            className={`flex items-center justify-between p-3 rounded-xl font-bold text-sm ${
              currentPath.startsWith('/events')
                ? 'bg-[#F4F1FA] text-[#3B1B7A]'
                : 'text-[#4B5563] hover:bg-slate-50'
            }`}
          >
            <span>الفعاليات والورش</span>
            <ArrowRight className="w-4 h-4 text-[#9CA3AF] rotate-180" strokeWidth={1.8} />
          </a>

          <div className="pt-2 border-t border-[#E8E5EE]">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick?.();
              }}
              className="w-full justify-center"
            >
              تسجيل الدخول
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
