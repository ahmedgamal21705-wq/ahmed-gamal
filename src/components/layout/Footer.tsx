import React from 'react';
import { AfaqLogo } from '../common/AfaqLogo';
import { MapPin, Heart, ArrowUp } from 'lucide-react';

export interface FooterProps {
  onNavigateCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#270F56] text-white border-t border-[#3B1B7A] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <AfaqLogo variant="white" size="lg" showTagline={false} />
            <p className="text-sm text-purple-200/90 max-w-md leading-relaxed">
              «اكتشف آفاقك الجديدة» — المنصة الأولى الموحدة لشباب الفيوم لاكتشاف الفرص، وورش العمل الحرفية والتقنية، والدورات التدريبية المعتمدة في مختلف مراكز المحافظة.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-1">
              <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.8} />
              <span>مُصممة خصيصاً بروح وتراث محافظة الفيوم</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">روابط المنصة</h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li>
                <a href="/" className="hover:text-white hover:underline transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white hover:underline transition-colors">
                  جميع الفعاليات
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory?.('workshop')}
                  className="hover:text-white hover:underline transition-colors text-right"
                >
                  ورش العمل الحرفية والتقنية
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory?.('course')}
                  className="hover:text-white hover:underline transition-colors text-right"
                >
                  الدورات التدريبية المكثفة
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory?.('event')}
                  className="hover:text-white hover:underline transition-colors text-right"
                >
                  الملتقيات والهاكاثونات
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Centers & Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">أبرز الوجهات بالفيوم</h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                <span>مركز إبداع مصر الرقمية (Creativa)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                <span>قرية تونس للخزف والفخار</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                <span>قصر ثقافة الفيوم والمسرح الروماني</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                <span>محميات وادي الريان وبحيرة قارون</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/80">
          <div className="flex items-center gap-1.5">
            <span>صُنع بـ</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" strokeWidth={1.8} />
            <span>من أجل شباب ومبدعي محافظة الفيوم © 2025</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-purple-200 hover:text-white font-medium p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </footer>
  );
};
