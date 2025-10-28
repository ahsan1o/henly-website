import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import MarketRatesSection from './components/MarketRatesSection';
import MarketplaceSection from './components/MarketplaceSection';
import EducationSection from './components/EducationSection';
import MobileAppSection from './components/MobileAppSection';

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <MarketRatesSection language={language} />
        <MarketplaceSection language={language} />
        <EducationSection language={language} />
        <MobileAppSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
