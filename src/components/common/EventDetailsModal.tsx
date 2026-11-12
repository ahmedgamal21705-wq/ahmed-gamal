import React from 'react';
import { X, Calendar, MapPin, Users, CheckCircle2, ArrowLeft, Heart } from 'lucide-react';
import { EventItem } from '../../data/mockEvents';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';

export interface EventDetailsModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegisterInterest?: (event: EventItem) => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  onClose,
  onRegisterInterest,
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E5EE] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#F4F1FA]">
          <img
            src={event.coverImage}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" strokeWidth={1.8} />
          </button>

          {/* Category Chip */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <Chip
              label={event.categoryLabel}
              variant={event.category}
              className="font-bold text-xs"
            />
            {event.isFree && (
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-sm">
                حضور مجاني
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
              <Users className="w-4 h-4 text-[#3B1B7A]" strokeWidth={1.8} />
              <span>الجهة المنظمة: <strong className="text-[#1E1B4B]">{event.organizer}</strong></span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] leading-snug">
              {event.title}
            </h2>
          </div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F9F8FD] rounded-2xl border border-[#E8E5EE]">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white text-[#3B1B7A] shadow-xs">
                <MapPin className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[#6B7280]">الموقع بالفيوم</div>
                <div className="font-bold text-[#1E1B4B] mt-0.5">{event.location}</div>
                <div className="text-[#0891B2] font-medium">{event.locationArea}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white text-[#3B1B7A] shadow-xs">
                <Calendar className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[#6B7280]">الموعد والتوقيت</div>
                <div className="font-bold text-[#1E1B4B] mt-0.5">{event.dateArabic}</div>
                <div className="text-[#6B7280]">{event.timeArabic}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#1E1B4B] mb-2">عن الفعالية</h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-[#1E1B4B] mb-2.5">ماذا ستكتسب من الحضور؟</h4>
              <ul className="space-y-2">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Seats Availability Bar */}
          <div className="p-4 rounded-2xl bg-[#FFF4E6] border border-[#FDE68A] flex items-center justify-between">
            <div className="text-xs">
              <span className="font-bold text-[#92400E]">المقاعد المتبقية:</span>{' '}
              <span className="font-extrabold text-[#C96B07]">{event.seatsLeft}</span> من إجمالي {event.seatsTotal}
            </div>
            <div className="text-xs font-semibold text-[#92400E]">
              سارع بحجز مقعدك قبل اكتمال العدد
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#E8E5EE] bg-[#FAFAF7] flex items-center justify-between gap-4">
          <Button variant="outline" size="md" onClick={onClose}>
            إغلاق
          </Button>

          <Button
            variant="accent"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" strokeWidth={2} />}
            onClick={() => {
              onRegisterInterest?.(event);
            }}
          >
            سجل اهتمامك بالفعالية
          </Button>
        </div>
      </div>
    </div>
  );
};
