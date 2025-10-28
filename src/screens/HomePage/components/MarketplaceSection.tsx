import { Users, Package, TrendingUp, Pill, Wheat, Truck, ArrowRight, Star } from 'lucide-react';
import { translations } from '../../../translations';
import contentData from '../../../../assets/data/content.json';

interface MarketplaceProps {
  language: 'en' | 'ur';
}

const iconMap = { Users, Package, TrendingUp, Pill, Wheat, Truck };

const services = contentData.services.map(service => ({
  ...service,
  icon: iconMap[service.icon as keyof typeof iconMap]
}));

const featuredSuppliers = contentData.featuredSuppliers;

export default function Marketplace({ language }: MarketplaceProps) {
  const t = translations[language];
  const isUrdu = language === 'ur';

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.ourServices}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#8b0000] cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t[service.key]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#8b0000] font-bold">{service.count}+</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t[service.key]}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t[`${service.key}Desc`]}
                  </p>
                  <button className={`flex items-center gap-2 text-[#8b0000] font-semibold group-hover:gap-3 transition-all ${isUrdu ? 'font-urdu flex-row-reverse' : ''}`}>
                    {t.viewProfile}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Listings Section */}
        <div className="bg-gradient-to-br from-[#8b0000] to-[#660000] rounded-2xl p-8 shadow-2xl">
          <div className={`text-center mb-8 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <h3 className="text-3xl font-bold text-white">
                {t.premiumListings}
              </h3>
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-white/90 text-lg">
              {t.featuredSuppliers}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredSuppliers.map((supplier, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">
                    {supplier.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {supplier.type}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-gray-900">{supplier.rating}</span>
                    </div>
                    <button className={`px-4 py-2 bg-[#8b0000] hover:bg-[#7a0000] text-white text-sm font-semibold rounded-lg transition-all ${isUrdu ? 'font-urdu' : ''}`}>
                      {t.viewProfile}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Placement */}
        <div className="mt-12 bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold mb-2">Advertisement Space</p>
            <p className="text-sm">728 x 90 Banner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
