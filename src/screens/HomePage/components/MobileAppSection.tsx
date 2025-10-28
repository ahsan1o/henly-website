import { Smartphone, TrendingUp, MessageCircle, BarChart3, Download, Star } from 'lucide-react';
import { translations } from '../../../translations';
import contentData from '../../../../assets/data/content.json';

interface MobileAppProps {
  language: 'en' | 'ur';
}

export default function MobileApp({ language }: MobileAppProps) {
  const t = translations[language];
  const isUrdu = language === 'ur';

  const iconMap = { TrendingUp, Smartphone, MessageCircle, BarChart3 };

  const features = contentData.mobileAppFeatures.map(feature => ({
    ...feature,
    icon: iconMap[feature.icon as keyof typeof iconMap]
  }));

  return (
    <section id="mobile-app" className="py-16 bg-gradient-to-br from-[#8b0000] via-[#7a0000] to-[#660000] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isUrdu ? 'font-urdu lg:order-2' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-10 h-10" />
              <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {isUrdu ? 'موبائل ایپ' : 'Mobile App'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.mobileAppTitle}
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.mobileAppDesc}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.key}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{t[feature.key]}</span>
                  </div>
                );
              })}
            </div>

            {/* App Stats */}
            <div className="flex items-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-white/80">{t.downloads}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <div>
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-white/80">{t.rating}</div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-white text-[#8b0000] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className={`text-left ${isUrdu ? 'text-right' : ''}`}>
                  <div className="text-xs">{isUrdu ? 'ڈاؤن لوڈ کریں' : 'Download on the'}</div>
                  <div className="text-lg font-bold -mt-1">App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 bg-white text-[#8b0000] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={`text-left ${isUrdu ? 'text-right' : ''}`}>
                  <div className="text-xs">{isUrdu ? 'اسے حاصل کریں' : 'GET IT ON'}</div>
                  <div className="text-lg font-bold -mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={`relative ${isUrdu ? 'lg:order-1' : ''}`}>
            <div className="relative mx-auto w-64 md:w-80">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-gray-900 h-6 w-40 mx-auto rounded-b-3xl"></div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-b from-gray-50 to-white p-4">
                    <img
                      src="/final-01.jpg"
                      alt="Henly App"
                      className="h-8 mb-4"
                    />

                    {/* Mock Market Rates */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 text-xs">Eggs</span>
                        <span className="text-green-600 text-xs font-bold">↑ +5%</span>
                      </div>
                      <div className="text-[#8b0000] text-2xl font-bold">PKR 280</div>
                      <div className="text-gray-500 text-xs">Per Dozen</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 text-xs">Chicken</span>
                        <span className="text-red-600 text-xs font-bold">↓ -3%</span>
                      </div>
                      <div className="text-[#8b0000] text-2xl font-bold">PKR 420</div>
                      <div className="text-gray-500 text-xs">Per Kg</div>
                    </div>

                    {/* Mock Image */}
                    <img
                      src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Poultry"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 animate-float">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
