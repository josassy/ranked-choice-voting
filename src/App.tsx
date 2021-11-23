import "tailwindcss/tailwind.css"
import './App.css';
import React from 'react';

const App: React.FC = ({ children }) => (
  <>
    <header>
      <h1>this is a header</h1>
    </header>
    <main>
      {children}
    </main>
  </>
);

export default App;
