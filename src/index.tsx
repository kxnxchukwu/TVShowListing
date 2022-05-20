import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import { StoreProvider } from './Store';
import HomePage from './Pages/Homepage';
import FavPage from './Pages/FavPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faves" element={<FavPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </StoreProvider>
);
