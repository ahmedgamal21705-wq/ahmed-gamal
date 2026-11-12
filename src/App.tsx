/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { Sparkles, X, Lock } from 'lucide-react';
import { Button } from './components/ui/Button';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Sync with browser URL / hash if navigated
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname + window.location.search;
      setCurrentPath(path || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (path.startsWith('/events')) {
      // Smoothly navigate or scroll to events section
      const eventsEl = document.getElementById('events-section');
      if (eventsEl) {
        eventsEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryNavigate = (cat: string) => {
    // Navigate with category parameter
    const newPath = `/events?category=${cat}`;
    setCurrentPath(newPath);
    const eventsEl = document.getElementById('events-section');
    if (eventsEl) {
      eventsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1E1B4B] font-sans antialiased">
      {/* Header (Top Bar Contract: 3 zones, single row) */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onLoginClick={() => setShowLoginModal(true)}
      />

      {/* Main Home Page */}
      <main className="flex-1 flex flex-col">
        <HomePage
          onNavigateToCategory={handleCategoryNavigate}
          onLoginClick={() => setShowLoginModal(true)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigateCategory={handleCategoryNavigate} />

      {/* Login Preview Modal (Explaining login will be fully connected in the next step) */}
      {showLoginModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E5EE] text-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 left-4 p-2 text-[#9CA3AF] hover:text-[#1E1B4B] rounded-xl transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" strokeWidth={1.8} />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#F4F1FA] text-[#3B1B7A] flex items-center justify-center mx-auto mb-4 shadow-xs">
              <Lock className="w-7 h-7" strokeWidth={1.8} />
            </div>

            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0891B2] bg-[#ECFEFF] px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
              <span>الخطوة 7: الهيكل والتصميم الأساسي</span>
            </div>

            <h3 className="text-xl font-bold text-[#1E1B4B] mb-2">
              تسجيل الدخول لشباب الفيوم
            </h3>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
              تم بناء واجهة المستخدم ومكونات التصميم والصفحة الرئيسية بنجاح في هذه الخطوة. سيتم ربط المصادقة وقواعد البيانات والحسابات تلقائياً في الخطوات التالية وفقاً لوثيقة المتطلبات.
            </p>

            <Button
              variant="primary"
              size="md"
              onClick={() => setShowLoginModal(false)}
              className="w-full justify-center font-bold"
            >
              فهمت ذلك، استكشف الصفحة
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
