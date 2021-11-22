import './App.css';
import React from 'react';

const App: React.FunctionComponent = ({ children }) => (
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
