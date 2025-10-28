import { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, MapPin, Clock } from 'lucide-react';
import { translations } from '../../../translations';
import contentData from '../../../../assets/data/content.json';

interface MarketRatesProps {
  language: 'en' | 'ur';
}

const pakistanLocations = contentData.pakistanLocations;
const marketData = contentData.marketData;

export default function MarketRates({ language }: MarketRatesProps) {
  const [activeTab, setActiveTab] = useState<'eggs' | 'chicken' | 'chicks'>('eggs');
  const [selectedProvince, setSelectedProvince] = useState('Punjab');
  const [selectedCity, setSelectedCity] = useState('Lahore');

  const t = translations[language];
  const isUrdu = language === 'ur';
  const currentData = marketData[activeTab];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-5 h-5 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-5 h-5 text-red-500" />;
    return <Minus className="w-5 h-5 text-gray-500" />;
  };

  const currentCities = pakistanLocations.find(loc => loc.province === selectedProvince)?.cities || [];

  return (
    <section id="market-rates" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.dailyMarketRates}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{t.updated}: {t.justNow}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#8b0000]/10">
            {/* Tabs */}
            <div className="flex border-b-2 border-gray-200">
              {(['eggs', 'chicken', 'chicks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 font-semibold text-lg transition-all ${isUrdu ? 'font-urdu' : ''} ${
                    activeTab === tab
                      ? 'bg-[#8b0000] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t[tab]}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={currentData.image}
                    alt={t[activeTab]}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    {getTrendIcon(currentData.trend)}
                    <span className={`font-bold ${
                      currentData.trend === 'up' ? 'text-green-600' :
                      currentData.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {currentData.change}
                    </span>
                  </div>
                </div>

                {/* Price Info */}
                <div className={`flex flex-col justify-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-[#8b0000] mb-2">
                      PKR {currentData.price}
                    </div>
                    <div className="text-xl text-gray-600">
                      {t[currentData.unit]}
                    </div>
                  </div>

                  {/* Location Selectors */}
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4" />
                        {isUrdu ? 'صوبہ' : 'Province'}
                      </label>
                      <select
                        value={selectedProvince}
                        onChange={(e) => {
                          setSelectedProvince(e.target.value);
                          const newCities = pakistanLocations.find(loc => loc.province === e.target.value)?.cities || [];
                          setSelectedCity(newCities[0]);
                        }}
                        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] focus:border-[#8b0000] ${isUrdu ? 'text-right font-urdu' : ''}`}
                      >
                        {pakistanLocations.map((loc) => (
                          <option key={loc.province} value={loc.province}>
                            {loc.province}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4" />
                        {isUrdu ? 'شہر' : 'City'}
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] focus:border-[#8b0000] ${isUrdu ? 'text-right font-urdu' : ''}`}
                      >
                        {currentCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button className={`mt-6 w-full py-3 bg-[#8b0000] hover:bg-[#7a0000] text-white font-semibold rounded-lg transition-all shadow-lg ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'تفصیلی رپورٹ دیکھیں' : 'View Detailed Report'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
