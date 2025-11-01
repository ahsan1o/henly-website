import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import headerLogo from '../../assets/images/logo.png';

interface HeaderProps {
  language: 'en' | 'ur';
  setLanguage: (lang: 'en' | 'ur') => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navigate = useNavigate();
  const t = translations[language];
  const isUrdu = language === 'ur';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  return (
    <>
      {/* Live Ticker */}
      <div className="bg-[#7a0000] text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap text-sm">
          <span className={isUrdu ? 'font-urdu' : ''}>
            🥚 {isUrdu ? 'انڈے' : 'Eggs'}: PKR 280/{isUrdu ? 'درجن' : 'dozen'} ↑
            &nbsp;&nbsp;|&nbsp;&nbsp;
            🐔 {isUrdu ? 'مرغی' : 'Chicken'}: PKR 420/{isUrdu ? 'کلو' : 'kg'} ↓
            &nbsp;&nbsp;|&nbsp;&nbsp;
            🐣 {isUrdu ? 'چوزے' : 'Chicks'}: PKR 85/{isUrdu ? 'فی چوزہ' : 'each'} →
            &nbsp;&nbsp;|&nbsp;&nbsp;
            📊 {isUrdu ? 'کراچی، لاہور، اسلام آباد میں تازہ ترین قیمتیں' : 'Latest rates in Karachi, Lahore, Islamabad'}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-gray-50 to-white shadow-md sticky top-0 z-50 border-b-2 border-red-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link to="/#home" className="relative block" aria-label="Go to Home" title="Henly Poultry Marketplace Home">
                <div className="absolute inset-0 bg-red-600 opacity-10 rounded-2xl blur-xl"></div>
                <img
                  src={headerLogo}
                  alt="Henly Poultry Marketplace logo"
                  className="h-20 w-auto relative z-10 transition-transform hover:scale-105 duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-2 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <Link to="/#home" className="px-5 py-2.5 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg relative group transition-all font-semibold text-[15px]">
                {t.home}
              </Link>
              <Link to="/#market-rates" className="px-5 py-2.5 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg relative group transition-all font-semibold text-[15px]">
                {t.marketRates}
              </Link>
              <Link to="/#services" className="px-5 py-2.5 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg relative group transition-all font-semibold text-[15px]">
                {t.farmers}
              </Link>
              <Link to="/about" className="px-5 py-2.5 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg relative group transition-all font-semibold text-[15px]">
                {isUrdu ? 'ہمارے بارے میں' : 'About'}
              </Link>

              {/* More Dropdown */}
              <div className="relative" onMouseLeave={() => setIsMoreOpen(false)}>
                <button
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="px-5 py-2.5 flex items-center gap-2 text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg relative group transition-all font-semibold text-[15px]"
                >
                  <span>{isUrdu ? 'مزید' : 'More'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl py-2 min-w-[240px] border border-gray-100 z-50 animate-fadeIn">
                    <Link to="/#services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2">
                      {t.wholesalers}
                    </Link>
                    <Link to="/#services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2">
                      {t.traders}
                    </Link>
                    <Link to="/#services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2">
                      {isUrdu ? 'فارما اور فیڈ' : 'Pharma & Feed'}
                    </Link>
                    <Link to="/#services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2">
                      {isUrdu ? 'ٹرانسپورٹر' : 'Transporters'}
                    </Link>
                    <Link to="/#education" className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2">
                      {t.news}
                    </Link>
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full text-left block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2"
                    >
                      {t.contact}
                    </button>
                    <button
                      onClick={() => navigate('/about')}
                      className="w-full text-left block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2"
                    >
                      {isUrdu ? 'ہمارے بارے میں' : 'About'}
                    </button>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button
                      onClick={() => navigate('/privacy')}
                      className="w-full text-left block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2 mb-2"
                    >
                      {t.privacyPolicy}
                    </button>
                    <button
                      onClick={() => navigate('/account-deletion')}
                      className="w-full text-left block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-semibold rounded-lg mx-2"
                    >
                      {isUrdu ? 'اکاؤنٹ حذفی' : 'Account Deletion'}
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-red-600 transition-all text-sm font-bold shadow-sm hover:shadow-md"
              >
                <span className={language === 'en' ? 'text-red-600' : 'text-gray-600'}>{isUrdu ? 'EN' : 'EN'}</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className={language === 'ur' ? 'text-red-600' : 'text-gray-600'}>اردو</span>
              </button>

              {/* Auth Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-3">
                <button className={`px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 hover:shadow-xl transition-all duration-300 font-bold text-sm transform hover:scale-105 ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.downloadApp}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg hover:bg-red-50 transition-colors border-2 border-transparent hover:border-red-200"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden bg-white border-t ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
            <div className="px-4 py-4 space-y-3">
              <Link to="/#home" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.home}
              </Link>
              <Link to="/#market-rates" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.marketRates}
              </Link>
              <Link to="/#services" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.farmers}
              </Link>
              <Link to="/#services" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.wholesalers}
              </Link>
              <Link to="/#services" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.traders}
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {isUrdu ? 'ہمارے بارے میں' : 'About'}
              </Link>
              <Link to="/#education" className="block py-2 text-gray-700 hover:text-[#8b0000] font-medium">
                {t.news}
              </Link>
              <button
                onClick={() => navigate('/contact')}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#8b0000] font-medium"
              >
                {t.contact}
              </button>
              <button 
                onClick={() => navigate('/privacy')}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#8b0000] font-medium"
              >
                {t.privacyPolicy}
              </button>
              <button 
                onClick={() => navigate('/account-deletion')}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#8b0000] font-medium"
              >
                {isUrdu ? 'اکاؤنٹ حذفی' : 'Account Deletion'}
              </button>
              <div className="pt-4 space-y-2">
                <button className={`w-full py-2 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-all font-medium ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.downloadApp}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
