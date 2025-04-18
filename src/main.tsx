
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initCursorEffect } from './utils/cursorEffect.js';

// Render the React application
createRoot(document.getElementById("root")!).render(<App />);

// Initialize the cursor effect after the app is rendered
document.addEventListener('DOMContentLoaded', () => {
  initCursorEffect();
});
