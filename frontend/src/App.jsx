import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/shop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
