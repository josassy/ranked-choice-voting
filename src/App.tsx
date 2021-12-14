import "tailwindcss/tailwind.css"
import './App.css';
import React from 'react';

type AppProps = {
  children: React.ReactNode
}
const App = ({ children }: AppProps) => (
  <main>
    {children}
  </main>
);

export default App;
