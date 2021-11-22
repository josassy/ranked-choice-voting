import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Vote from './pages/Vote';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="vote" element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
