import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Fant ikke HTML-elementet med id="root".');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);