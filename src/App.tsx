import "tailwindcss/tailwind.css"
import './App.css';
import React from 'react';

type AppProps = {
  children: React.ReactNode
}
const App = ({ children }: AppProps) => (
  <main className="flex flex-col min-h-screen">
    <header className="h-10">
      <img src='/images/home.jpg' className="w-full h-full object-cover" alt='' />
    </header>
    <div className="flex flex-col flex-auto">
      {children}
    </div>
    <footer className="h-20">
      <img src='/images/home.jpg' className="w-full h-full object-cover" alt='' />
    </footer>
  </main>
);

export default App;
