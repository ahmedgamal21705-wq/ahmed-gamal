import React, { useState, useMemo } from 'react';
import {
  Search,
  Compass,
  ArrowLeft,
  Calendar,
  GraduationCap,
  Users,
  MapPin,
  Sparkles,
  ArrowDown,
  ChevronDown,
} from 'lucide-react';
import { MOCK_EVENTS, EventItem } from '../data/mockEvents';
import { EventCard } from '../components/ui/EventCard';
import { Button } from '../components/ui/Button';
import { Chip } from '../components/ui/Chip';
import { EventDetailsModal } from '../components/common/EventDetailsModal';

export interface HomePageProps {
  onNavigateToCategory?: (category: string) => void;
  onLoginClick?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToCategory,
  onLoginClick,
}) => {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'workshop' | 'course' | 'event'>('all');

  // Selected event for modal preview
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Success toast for interactive actions
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter events based on search, area, and category
  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((ev) => {
      // Category filter
      if (selectedCategory !== 'all' && ev.category !== selectedCategory) {
        return false;
      }
      // Area filter
      if (selectedArea !== 'all' && !ev.locationArea.includes(selectedArea)) {
        return false;
      }
      // Search text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = ev.title.toLowerCase().includes(q);
        const matchesOrganizer = ev.organizer.toLowerCase().includes(q);
        const matchesLocation = ev.location.toLowerCase().includes(q);
        const matchesDesc = ev.description.toLowerCase().includes(q);
        return matchesTitle || matchesOrganizer || matchesLocation || matchesDesc;
      }
      return true;
    });
  }, [searchQuery, selectedArea, selectedCategory]);

  const handleCategoryCardExplore = (category: 'workshop' | 'course' | 'event') => {
    // Set active category filter and scroll smoothly to events
    setSelectedCategory(category);
    if (onNavigateToCategory) {
      onNavigateToCategory(category);
    }
    const section = document.getElementById('events-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(
      category === 'workshop'
        ? 'تم تصفية الفعاليات: ورش العمل'
        : category === 'course'
        ? 'تم تصفية الفعاليات: الدورات التدريبية'
        : 'تم تصفية الفعاليات: الفعاليات والملتقيات'
    );
  };

  const scrollToEvents = () => {
    const el = document.getElementById('events-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3B1B7A] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20 text-sm font-semibold flex items-center gap-2 animate-in slide-in-from-bottom-4 duration-200">
          <Sparkles className="w-4 h-4 text-[#F7931E]" strokeWidth={2} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#1F0A44] text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Background Image of Lake Qarun & Fayoum Mountains */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/fayoum_hero_landscape_1794396727741.jpg"
            alt="منظر طبيعي لبحيرة قارون وجبال ونخيل الفيوم"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000"
          />
          {/* Deep Blue / Royal Purple Gradient Scrim Overlay for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#190638]/95 via-[#2D1263]/85 to-[#0F172A]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#1F0A44]/40 to-[#1F0A44]/90" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-amber-300 mb-6">
            <MapPin className="w-4 h-4 text-[#F7931E]" strokeWidth={1.8} />
            <span>طور نفسك .. اصنع مستقبلك في الفيوم</span>
          </div>

          {/* Slogan Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white max-w-4xl [text-wrap:balance]">
            اكتشف آفاقك الجديدة
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-purple-100/90 max-w-2xl font-medium leading-relaxed [text-wrap:balance]">
            المنصة الأولى الموحدة لشباب الفيوم لاكتشاف وتطوير المهارات عبر الورش الحرفية والتقنية، الدورات المعتمدة، والملتقيات في قلب المحافظة.
          </p>

          {/* Quick CTA button «ابدأ الاستكشاف» */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              onClick={scrollToEvents}
              icon={<Compass className="w-5 h-5" strokeWidth={1.8} />}
              iconPosition="start"
              className="text-base font-bold shadow-lg shadow-[#F7931E]/20"
            >
              ابدأ الاستكشاف
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById('categories-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-base"
            >
              تصفح التصنيفات
            </Button>
          </div>

          {/* Hero Search Box */}
          <div className="mt-10 w-full max-w-3xl bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 text-right">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
              {/* Search input */}
              <div className="sm:col-span-6 relative flex items-center">
                <Search className="w-5 h-5 text-[#3B1B7A] absolute right-3.5 pointer-events-none" strokeWidth={1.8} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث باسم الورشة، الدورة، أو الفعالية..."
                  className="w-full bg-[#F9F8FD] text-[#1E1B4B] placeholder:text-[#9CA3AF] text-sm pr-11 pl-4 py-3 rounded-xl border border-[#E8E5EE] focus:border-[#3B1B7A] focus:bg-white focus:ring-2 focus:ring-[#3B1B7A]/20 outline-none transition-all"
                />
              </div>

              {/* Area select */}
              <div className="sm:col-span-3 relative flex items-center">
                <MapPin className="w-4 h-4 text-[#3B1B7A] absolute right-3 pointer-events-none" strokeWidth={1.8} />
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full appearance-none bg-[#F9F8FD] text-[#1E1B4B] text-xs font-semibold pr-9 pl-7 py-3 rounded-xl border border-[#E8E5EE] focus:border-[#3B1B7A] focus:bg-white outline-none cursor-pointer"
                >
                  <option value="all">كل مناطق الفيوم</option>
                  <option value="مدينة الفيوم">مدينة الفيوم</option>
                  <option value="قرية تونس">قرية تونس (يوسف الصديق)</option>
                  <option value="جامعة الفيوم">جامعة الفيوم</option>
                  <option value="وادي الريان">وادي الريان والمحميات</option>
                  <option value="بحيرة قارون">ساحل بحيرة قارون</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#6B7280] absolute left-3 pointer-events-none" strokeWidth={1.8} />
              </div>

              {/* Submit search button */}
              <div className="sm:col-span-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={scrollToEvents}
                  icon={<Search className="w-4 h-4" strokeWidth={2} />}
                  iconPosition="start"
                  className="w-full justify-center py-3 text-sm font-bold shadow-md"
                >
                  بحث
                </Button>
              </div>
            </div>

            {/* Quick search tags */}
            <div className="mt-3 pt-2.5 border-t border-[#F0EEF6] flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
              <span className="font-semibold text-[#1E1B4B]">شائع الآن بالفيوم:</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('خزف');
                  scrollToEvents();
                }}
                className="hover:text-[#3B1B7A] underline transition-colors"
              >
                صناعة الخزف
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('برمجة');
                  scrollToEvents();
                }}
                className="hover:text-[#3B1B7A] underline transition-colors"
              >
                برمجة وذكاء اصطناعي
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('ريادة');
                  scrollToEvents();
                }}
                className="hover:text-[#3B1B7A] underline transition-colors"
              >
                ريادة الأعمال
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('تصوير');
                  scrollToEvents();
                }}
                className="hover:text-[#3B1B7A] underline transition-colors"
              >
                تصوير المحميات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: أحدث الفعاليات (6 Cards) */}
      <section id="events-section" className="w-full py-16 sm:py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0891B2] uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" strokeWidth={1.8} />
                <span>الفرص القادمة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight">
                أحدث الفعاليات في الفيوم
              </h2>
              <p className="mt-1 text-sm text-[#4B5563]">
                فرص تدريبية، ورش عمل تطبيقية، وملتقيات متاحة للتسجيل هذا الشهر
              </p>
            </div>

            {/* Filter buttons / tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <Chip
                label="جميع الفعاليات"
                count={MOCK_EVENTS.length}
                variant={selectedCategory === 'all' ? 'active' : 'inactive'}
                onClick={() => setSelectedCategory('all')}
              />
              <Chip
                label="ورش عمل"
                count={MOCK_EVENTS.filter((e) => e.category === 'workshop').length}
                variant={selectedCategory === 'workshop' ? 'active' : 'inactive'}
                onClick={() => setSelectedCategory('workshop')}
              />
              <Chip
                label="دورات تدريبية"
                count={MOCK_EVENTS.filter((e) => e.category === 'course').length}
                variant={selectedCategory === 'course' ? 'active' : 'inactive'}
                onClick={() => setSelectedCategory('course')}
              />
              <Chip
                label="فعاليات شبابية"
                count={MOCK_EVENTS.filter((e) => e.category === 'event').length}
                variant={selectedCategory === 'event' ? 'active' : 'inactive'}
                onClick={() => setSelectedCategory('event')}
              />
            </div>
          </div>

          {/* Cards Grid (6 events) */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onViewDetails={(ev) => setSelectedEvent(ev)}
                  onToggleFavorite={(id) => {
                    showToast('تم تحديث قائمة المحفوظات بنجاح');
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E8E5EE] max-w-lg mx-auto">
              <Search className="w-12 h-12 text-[#9CA3AF] mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-bold text-[#1E1B4B]">لا توجد فعاليات مطابقة للبحث</h3>
              <p className="text-xs text-[#6B7280] mt-1 mb-4">
                جرب تغيير كلمات البحث أو اختر تصنيفاً آخر.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedArea('all');
                  setSelectedCategory('all');
                }}
              >
                إعادة ضبط الفلاتر
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION: تصفح حسب التصنيف (3 Cards) */}
      <section id="categories-section" className="w-full py-16 sm:py-20 bg-white border-y border-[#E8E5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#3B1B7A] tracking-wider uppercase">
              مسارات الاكتشاف
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight mt-1">
              تصفح حسب التصنيف
            </h2>
            <p className="mt-2 text-sm text-[#4B5563]">
              اختر المسار التدريبي أو النشاط الذي يلائم طموحك وابدأ خطوتك الأولى
            </p>
          </div>

          {/* 3 Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. ورش العمل (Workshop) */}
            <div className="group relative bg-[#FAFAF7] hover:bg-white rounded-3xl p-7 border border-[#E8E5EE] hover:border-[#FDE68A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#FEF3C7] text-[#92400E] mb-3">
                  تطبيقي وعملي
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2.5">
                  ورش العمل
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  ورش تطبيقية وسريعة لإتقان المهارات الحرفية، صناعة الخزف التراثي في قرية تونس، وفنون التصوير وصناعة المحتوى.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E5EE]">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleCategoryCardExplore('workshop')}
                  icon={<ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />}
                  className="w-full justify-between hover:bg-[#FEF3C7] hover:text-[#92400E] hover:border-[#FDE68A]"
                >
                  <span>استكشف الورش (/events?category=workshop)</span>
                </Button>
              </div>
            </div>

            {/* 2. الدورات التدريبية (Course) */}
            <div className="group relative bg-[#FAFAF7] hover:bg-white rounded-3xl p-7 border border-[#E8E5EE] hover:border-[#DBEAFE] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#EFF6FF] text-[#1E40AF] mb-3">
                  تأهيل لسوق العمل
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2.5">
                  الدورات التدريبية
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  برامج تعليمية متعمقة في مجالات البرمجة والذكاء الاصطناعي، التسويق الرقمي، وإدارة الأعمال بالتعاون مع مراكز كرياتيفا وجامعة الفيوم.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E5EE]">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleCategoryCardExplore('course')}
                  icon={<ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />}
                  className="w-full justify-between hover:bg-[#EFF6FF] hover:text-[#1E40AF] hover:border-[#DBEAFE]"
                >
                  <span>استكشف الدورات (/events?category=course)</span>
                </Button>
              </div>
            </div>

            {/* 3. الفعاليات والملتقيات (Event) */}
            <div className="group relative bg-[#FAFAF7] hover:bg-white rounded-3xl p-7 border border-[#E8E5EE] hover:border-[#F3E8FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FAF5FF] text-[#6B21A8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF5FF] text-[#6B21A8] mb-3">
                  تواصل وشبكة علاقات
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2.5">
                  الفعاليات والملتقيات
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  هاكاثونات ابتكارية، ملتقيات ريادة الأعمال، وجلسات حوارية تجمع شباب الفيوم بنخبة من الخبراء والمستثمرين لتبادل الرؤى والأفكار.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E5EE]">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleCategoryCardExplore('event')}
                  icon={<ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />}
                  className="w-full justify-between hover:bg-[#FAF5FF] hover:text-[#6B21A8] hover:border-[#F3E8FF]"
                >
                  <span>استكشف الفعاليات (/events?category=event)</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: إزاي تسجل (3 Steps) */}
      <section className="w-full py-16 sm:py-24 bg-[#F4F1FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#3B1B7A] tracking-wider uppercase">
              بكل سهولة وسرعة
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight mt-1">
              إزاي تسجل؟ ثلاث خطوات بسيطة
            </h2>
            <p className="mt-2 text-sm text-[#4B5563]">
              خطوات سريعة لحجز مقعدك في الفعاليات والورش المتاحة بمحافظة الفيوم
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative bg-white rounded-3xl p-8 border border-[#E8E5EE] shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#3B1B7A] text-white text-base font-extrabold flex items-center justify-center mb-6 shadow-md shadow-[#3B1B7A]/20">
                1
              </div>
              <div className="p-3 rounded-2xl bg-[#F4F1FA] text-[#3B1B7A] mb-4">
                <Search className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                استكشف الفعاليات
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                تصفح ورش العمل والدورات والملتقيات بحسب اهتمامك ومنطقتك داخل محافظة الفيوم واقرأ تفاصيل كل فعالية.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-3xl p-8 border border-[#E8E5EE] shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F7931E] text-white text-base font-extrabold flex items-center justify-center mb-6 shadow-md shadow-[#F7931E]/20">
                2
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF4E6] text-[#F7931E] mb-4">
                <Users className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                أنشئ حسابك بدقيقة
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                سجل حسابك الشخصي مجاناً لتتمكن من حجز المقاعد ومتابعة تسجيلاتك وتلقي تنبيهات المواعيد وتأكيدات الحضور.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-3xl p-8 border border-[#E8E5EE] shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0891B2] text-white text-base font-extrabold flex items-center justify-center mb-6 shadow-md shadow-[#0891B2]/20">
                3
              </div>
              <div className="p-3 rounded-2xl bg-[#ECFEFF] text-[#0891B2] mb-4">
                <Calendar className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                احجز مقعدك وانطلق
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                اضغط «تسجيل» لتأكيد مقعدك فوراً. توجه لمقر الفعالية في الموعد المحدد واصنع مستقبلك مع شباب الفيوم.
              </p>
            </div>
          </div>

          {/* Bottom call to action banner */}
          <div className="mt-12 bg-gradient-to-r from-[#3B1B7A] to-[#270F56] rounded-3xl p-8 sm:p-10 text-white text-center flex flex-col items-center justify-center shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              جاهز لاكتشاف آفاق جديدة في الفيوم؟
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl mb-6">
              سجل الآن وابدأ في بناء مهاراتك وشبكة علاقاتك مع شباب محافظتك في أهم الفعاليات.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="accent"
                size="md"
                onClick={onLoginClick}
                className="font-bold px-7"
              >
                تسجيل الدخول / إنشاء حساب
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={scrollToEvents}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                تصفح الفعاليات الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegisterInterest={(ev) => {
          setSelectedEvent(null);
          showToast(`تم تسجيل اهتمامك بـ "${ev.title}" بنجاح!`);
        }}
      />
    </div>
  );
};
