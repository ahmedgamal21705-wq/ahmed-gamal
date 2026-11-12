import React, { useState } from 'react';
import { Calendar, MapPin, ArrowLeft, Heart, Users } from 'lucide-react';
import { EventItem } from '../../data/mockEvents';
import { Chip } from './Chip';

export interface EventCardProps {
  event: EventItem;
  onViewDetails: (event: EventItem) => void;
  isFavorited?: boolean;
  onToggleFavorite?: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onViewDetails,
  isFavorited = false,
  onToggleFavorite,
}) => {
  const [favorite, setFavorite] = useState(isFavorited);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !favorite;
    setFavorite(next);
    if (onToggleFavorite) {
      onToggleFavorite(event.id);
    }
  };

  return (
    <article
      onClick={() => onViewDetails(event)}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#E8E5EE] hover:border-[#C4B5FD] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F1FA]">
        <img
          src={event.coverImage}
          alt={event.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Elegant CSS fallback if image path ever fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Gradient scrim for top controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges: Category & Favorite */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <Chip
            label={event.categoryLabel}
            variant={event.category}
            className="shadow-sm backdrop-blur-md font-semibold text-xs"
          />

          {/* Outline Heart Button */}
          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-label={favorite ? 'إزالة من المحفوظات' : 'حفظ الفعالية'}
            className="p-2 rounded-xl bg-white/90 hover:bg-white text-[#4B5563] hover:text-[#DC2626] backdrop-blur-md shadow-sm transition-all duration-200 cursor-pointer active:scale-90"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                favorite ? 'fill-[#DC2626] text-[#DC2626]' : 'text-[#4B5563]'
              }`}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Free Tag / Seats left */}
        {event.isFree && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#3B1B7A]/90 text-white backdrop-blur-md">
              مجانية
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Organizer */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-[#6B7280] mb-2">
          <Users className="w-3.5 h-3.5 text-[#3B1B7A]" strokeWidth={1.8} />
          <span className="truncate">{event.organizer}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#1E1B4B] group-hover:text-[#3B1B7A] transition-colors leading-snug line-clamp-2 mb-3">
          {event.title}
        </h3>

        {/* Metadata Details (Location & Date) */}
        <div className="flex flex-col gap-2 pt-1 border-t border-[#F0EEF6] mt-auto">
          {/* Location with outline MapPin */}
          <div className="flex items-center gap-2 text-xs text-[#4B5563]">
            <MapPin className="w-4 h-4 text-[#3B1B7A] shrink-0" strokeWidth={1.8} />
            <span className="truncate" title={event.location}>
              {event.location}
            </span>
          </div>

          {/* Date in Arabic with outline Calendar */}
          <div className="flex items-center gap-2 text-xs text-[#4B5563]">
            <Calendar className="w-4 h-4 text-[#3B1B7A] shrink-0" strokeWidth={1.8} />
            <span className="font-medium text-[#1E1B4B]">{event.dateArabic}</span>
            <span className="text-[#9CA3AF]">·</span>
            <span className="text-[#6B7280]">{event.timeArabic}</span>
          </div>
        </div>

        {/* Footer Action: «عرض التفاصيل» with Turquoise link & outline arrow */}
        <div className="mt-4 pt-3 border-t border-[#F0EEF6] flex items-center justify-between">
          <div className="text-xs text-[#6B7280]">
            باقي <span className="font-bold text-[#3B1B7A]">{event.seatsLeft}</span> مقاعد
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0891B2] group-hover:text-[#0E7490] group-hover:gap-2 transition-all">
            <span>عرض التفاصيل</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
          </div>
        </div>
      </div>
    </article>
  );
};
