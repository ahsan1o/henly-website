import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface TableOfContentsProps {
  language: 'en' | 'ur';
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'introduction', titleEn: 'Introduction', titleUr: 'تعارف' },
  { id: 'information-collected', titleEn: 'Information We Collect', titleUr: 'جو معلومات ہم جمع کرتے ہیں' },
  { id: 'how-we-use', titleEn: 'How We Use Your Information', titleUr: 'ہم آپ کی معلومات کا استعمال کیسے کریں' },
  { id: 'how-we-share', titleEn: 'How We Share Your Information', titleUr: 'ہم آپ کی معلومات کو کیسے شیئر کرتے ہیں' },
  { id: 'data-security', titleEn: 'Data Security', titleUr: 'ڈیٹا کی سیکیورٹی' },
  { id: 'your-rights', titleEn: 'Your Data Rights', titleUr: 'آپ کے ڈیٹا کے حقوق' },
  { id: 'request-rights', titleEn: 'How to Request Your Rights', titleUr: 'اپنے حقوق کی درخواست کیسے کریں' },
  { id: 'data-retention', titleEn: 'Data Retention', titleUr: 'ڈیٹا کی تحفظ' },
  { id: 'cookies', titleEn: 'Cookies & Tracking Technologies', titleUr: 'کوکیز اور ٹریکنگ ٹیکنالوجیز' },
  { id: 'third-party', titleEn: 'Third-Party Services', titleUr: 'تیسری فریق کی خدمات' },
  { id: 'children-privacy', titleEn: 'Children\'s Privacy', titleUr: 'بچوں کی رازداری' },
  { id: 'ccpa', titleEn: 'California Privacy Rights (CCPA)', titleUr: 'کیلیفورنیا میں رازداری کے حقوق' },
  { id: 'gdpr', titleEn: 'European Privacy Rights (GDPR)', titleUr: 'یورپی رازداری کے حقوق' },
  { id: 'pakistan-compliance', titleEn: 'Pakistan Data Protection Compliance', titleUr: 'پاکستان میں ڈیٹا کے تحفظ کی تعریف' },
  { id: 'policy-changes', titleEn: 'Policy Changes', titleUr: 'پالیسی میں تبدیلیاں' },
  { id: 'international-transfers', titleEn: 'International Data Transfers', titleUr: 'بین الاقوامی ڈیٹا کی منتقلی' },
  { id: 'contact-us', titleEn: 'Contact Us', titleUr: 'ہمسے رابطہ کریں' },
  { id: 'complaint-resolution', titleEn: 'Complaint Resolution', titleUr: 'شکایت کی تحقیق' },
];

export default function TableOfContents({ language, activeSection, onSectionChange }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isUrdu = language === 'ur';

  return (
    <div className={`sticky top-24 ${isUrdu ? 'text-right' : ''}`}>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden w-full flex items-center justify-between gap-3 p-4 bg-[#8b0000] text-white rounded-lg mb-4 font-semibold ${isUrdu ? 'font-urdu' : ''}`}
      >
        <span>{isUrdu ? 'فہرس' : 'Table of Contents'}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Content */}
      {isOpen && (
        <nav className="bg-gray-50 rounded-xl p-4 border border-gray-200 max-h-[calc(100vh-150px)] overflow-y-auto">
          <div className={`text-sm font-bold text-[#8b0000] mb-4 uppercase tracking-wide ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'سیکشنز' : 'Sections'}
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    onSectionChange(section.id);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                    activeSection === section.id
                      ? 'bg-[#8b0000] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-200'
                  } ${isUrdu ? 'font-urdu' : ''}`}
                >
                  {isUrdu ? section.titleUr : section.titleEn}
                </button>
              </li>
            ))}
          </ul>

          {/* Footer Note */}
          <div className={`mt-6 pt-4 border-t border-gray-300 text-xs text-gray-600 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'ہر سیکشن پر کلک کریں نیچے آسانی سے جانے کے لیے'
              : 'Click each section to navigate'}
          </div>
        </nav>
      )}
    </div>
  );
}
