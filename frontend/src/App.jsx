import React from 'react';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import Login from './components/admin/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/shop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
