import { BookOpen, Stethoscope, TrendingUp, Newspaper, ArrowRight } from 'lucide-react';
import { translations } from '../../../translations';
import contentData from '../../../../assets/data/content.json';

interface EducationProps {
  language: 'en' | 'ur';
}

const iconMap = { Stethoscope, BookOpen, TrendingUp };

const educationTopics = contentData.educationTopics.map(topic => ({
  ...topic,
  icon: iconMap[topic.icon as keyof typeof iconMap]
}));

export default function Education({ language }: EducationProps) {
  const t = translations[language];
  const isUrdu = language === 'ur';

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-[#8b0000]" />
            <h2 className="text-4xl font-bold text-gray-900">
              {t.knowledgeCenter}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {educationTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.key}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#8b0000]"
                >
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image */}
                    <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={topic.image}
                        alt={t[topic.key]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg`}>
                          <Icon className="w-8 h-8 text-[#8b0000]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`md:col-span-3 p-6 flex flex-col justify-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {t[topic.key]}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        {t[`${topic.key}Desc`]}
                      </p>
                      <button className={`flex items-center gap-2 text-[#8b0000] font-semibold text-lg group-hover:gap-3 transition-all ${isUrdu ? 'font-urdu flex-row-reverse' : ''}`}>
                        {t.learnMore}
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Ad Placement */}
            <div className="bg-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <p className="text-lg font-semibold mb-1">Advertisement Space</p>
                <p className="text-sm">728 x 90 Banner</p>
              </div>
            </div>
          </div>

          {/* Sidebar - News & Updates */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 sticky top-24">
              <div className={`flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#8b0000] ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
                <Newspaper className="w-6 h-6 text-[#8b0000]" />
                <h3 className="text-xl font-bold text-gray-900">
                  {t.latestNews}
                </h3>
              </div>

              <div className={`space-y-4 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="group pb-4 border-b border-gray-200 last:border-0 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#8b0000]"></div>
                      <div className="flex-1">
                        <p className="text-gray-700 group-hover:text-[#8b0000] transition-colors leading-relaxed">
                          {t[`newsItem${num}`]}
                        </p>
                        <span className="text-xs text-gray-500 mt-2 block">
                          {isUrdu ? '2 گھنٹے پہلے' : '2 hours ago'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className={`w-full mt-6 py-3 bg-[#8b0000] hover:bg-[#7a0000] text-white font-semibold rounded-lg transition-all ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'تمام خبریں دیکھیں' : 'View All News'}
              </button>

              {/* Sidebar Ad */}
              <div className="mt-6 bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500 text-xs">
                  <p className="font-semibold mb-1">Ad Space</p>
                  <p>300 x 250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
