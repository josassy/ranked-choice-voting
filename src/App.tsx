import "tailwindcss/tailwind.css"
import './App.css';
import React from 'react';

const App: React.FC = ({ children }) => (
  <main>
    {children}
  </main>
);

export default App;
