import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';
import { translations } from '../translations';

interface FooterProps {
  language: 'en' | 'ur';
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  const isUrdu = language === 'ur';

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className={`md:col-span-2 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
            <img
              src="/final-01.jpg"
              alt="Henly Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              {t.aboutDesc}
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {isUrdu ? 'پاکستان بھر میں خدمات فراہم کر رہے ہیں' : 'Serving across Pakistan'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={isUrdu ? 'font-urdu' : ''} dir={isUrdu ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-bold mb-4 text-white">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  {t.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  {t.termsConditions}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  {t.faq}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  {t.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isUrdu ? 'font-urdu' : ''} dir={isUrdu ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-bold mb-4 text-white">{t.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8b0000]" />
                <a href="mailto:info@henly.pk" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  info@henly.pk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8b0000]" />
                <a href="tel:+923001234567" className="text-gray-400 hover:text-[#8b0000] transition-colors">
                  +92 300 1234567
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white">{t.followUs}</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-[#8b0000] rounded-lg transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-[#8b0000] rounded-lg transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-[#8b0000] rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-[#8b0000] rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad Space */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 border-2 border-dashed border-gray-700">
          <div className="text-center text-gray-500 text-sm">
            <p className="font-semibold mb-1">Advertisement Space</p>
            <p className="text-xs">728 x 90 Banner</p>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-gray-800 pt-6 text-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Henly. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
