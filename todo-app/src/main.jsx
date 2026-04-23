import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';
import "./styles/styles.css"; // общий файл для базовых стилей

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
