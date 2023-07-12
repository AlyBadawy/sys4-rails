import * as React from 'react';
import { createRoot } from 'react-dom/client';

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return <div>{`Hello, ${arg}!`}</div>;
};

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('react-app-root');
  const root = createRoot(rootEl!);
  root.render(<App arg='Rails 7 with ESBuild' />);
});
