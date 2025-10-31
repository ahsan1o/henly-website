import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface AppScreenshotsSectionProps {
  language: 'en' | 'ur';
}

// Auto-import all screenshots placed under assets/images/screenshots/*
// Supported formats: png, jpg, jpeg, webp, svg
const modules = import.meta.glob<string>(
  '/assets/images/screenshots/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, as: 'url' }
);

const screenshots: { src: string; alt: string }[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url], i) => ({ src: url, alt: `App screen ${i + 1}` }));

export default function AppScreenshotsSection({ language }: AppScreenshotsSectionProps) {
  const isUrdu = language === 'ur';

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: false,
      slidesToScroll: 1,
    },
    [
      Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const hasShots = screenshots.length > 0;

  return (
    <section id="app-screenshots" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <ImageIcon className="w-8 h-8 text-[#8b0000]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {isUrdu ? 'ایپ کے اسکرین شاٹس' : 'App Screenshots'}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isUrdu
              ? 'یہاں ہماری موبائل ایپ کی جھلکیاں ہیں۔ آپ تصاویر ہمیں دیں، ہم شامل کر دیں گے۔'
              : 'A quick look at the mobile app. Share the images and I’ll wire them up here.'}
          </p>
        </div>

        {!hasShots ? (
          <div className="text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-xl p-10">
            <p className="mb-2 font-semibold">{isUrdu ? 'اسکرین شاٹس شامل کریں' : 'Add your screenshots'}</p>
            <p className="text-sm">
              {isUrdu
                ? 'تصاویر کو assets/images/screenshots/ فولڈر میں رکھیں — وہ خود بخود یہاں ظاہر ہو جائیں گی۔'
                : 'Place images in assets/images/screenshots/ — they will auto‑appear here.'}
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Background rotating reflection */}
            <div className="pointer-events-none absolute -inset-x-10 -top-24 -bottom-24 opacity-30">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full bg-gradient-to-tr from-[#8b0000]/20 via-white/5 to-[#8b0000]/10 blur-3xl animate-spin-slow"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square rounded-full bg-gradient-to-bl from-white/10 via-transparent to-white/10 blur-2xl animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '60s' }}></div>
            </div>
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -mx-3 md:-mx-2">
                {screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="px-3 md:px-2 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0 min-w-0"
                    style={{ animationDelay: `${Math.min(idx, 5) * 60}ms` }}
                  >
                    <div className="group relative rounded-2xl p-2 bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-up">
                      {/* Device-like frame */}
                      <div className="relative rounded-xl overflow-hidden bg-white">
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="w-full aspect-[9/19] object-contain bg-white group-hover:scale-[1.01] transition-transform duration-300"
                          loading="lazy"
                        />
                        {/* Shine sweep */}
                        <div className="shine" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 pointer-events-none">
              <button
                aria-label={isUrdu ? 'پچھلا' : 'Previous'}
                onClick={scrollPrev}
                className="pointer-events-auto p-2 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white transition-colors border border-gray-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>
              <button
                aria-label={isUrdu ? 'اگلا' : 'Next'}
                onClick={scrollNext}
                className="pointer-events-auto p-2 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white transition-colors border border-gray-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
