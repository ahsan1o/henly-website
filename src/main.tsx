import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SEOProvider } from './components/SEO';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SEOProvider>
      <App />
    </SEOProvider>
  </StrictMode>
);
