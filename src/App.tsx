import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './screens/HomePage/HomePage';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';
import AccountDeletion from './screens/AccountDeletion/AccountDeletion';
import ContactUs from './screens/ContactUs/ContactUs';
import About from './screens/About/About';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="/contact" element={<ContactUs />} />
  <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
