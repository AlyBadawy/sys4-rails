import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoot } from './core/AppRoot';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('react-app-root');
  const root = createRoot(rootEl!);

  root.render(
    <React.StrictMode>
      <AppRoot />
    </React.StrictMode>
  );
});
