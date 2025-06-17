import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path='/cart' element={< Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
