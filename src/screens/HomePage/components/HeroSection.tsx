import { Search, TrendingUp, Users, Truck, ArrowRight } from 'lucide-react';
import { translations } from '../../../translations';

interface HeroProps {
  language: 'en' | 'ur';
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const isUrdu = language === 'ur';

  return (
    <section id="home" className="relative">
      {/* Hero Background with Commercial Poultry Farm */}
      <div
        className="relative bg-gradient-to-r from-gray-900 via-[#8b0000]/90 to-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1556665/pexels-photo-1556665.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#8b0000]/60 to-black/70"></div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isUrdu ? 'leading-relaxed' : ''}`}>
              {t.heroTitle}
            </h1>
            <p className={`text-xl md:text-2xl mb-10 text-gray-200 ${isUrdu ? 'leading-relaxed' : ''}`}>
              {t.heroSubtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className={`absolute ${isUrdu ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className={`w-full ${isUrdu ? 'pr-12 text-right font-urdu' : 'pl-12'} py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#8b0000]/50 shadow-2xl`}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className={`px-8 py-4 bg-[#8b0000] hover:bg-[#7a0000] rounded-xl font-semibold text-lg transition-all shadow-2xl hover:shadow-[#8b0000]/50 flex items-center justify-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                {t.exploreMarket}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${isUrdu ? 'font-urdu' : ''}`}>
                {t.viewRates}
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 mb-3 mx-auto text-[#ffcccb]" />
                <div className="text-3xl font-bold mb-1">15,000+</div>
                <div className={`text-sm text-gray-300 ${isUrdu ? 'font-urdu' : ''}`}>{t.farmersRegistered}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 mb-3 mx-auto text-[#ffcccb]" />
                <div className="text-3xl font-bold mb-1">2,500+</div>
                <div className={`text-sm text-gray-300 ${isUrdu ? 'font-urdu' : ''}`}>{t.tradersRegistered}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Truck className="w-8 h-8 mb-3 mx-auto text-[#ffcccb]" />
                <div className="text-3xl font-bold mb-1">850+</div>
                <div className={`text-sm text-gray-300 ${isUrdu ? 'font-urdu' : ''}`}>{t.transportRegistered}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 mb-3 mx-auto text-[#ffcccb]" />
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className={`text-sm text-gray-300 ${isUrdu ? 'font-urdu' : ''}`}>{t.dailyTransactions}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
