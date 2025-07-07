import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import Login from './components/admin/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Register from './components/admin/Register';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/admin/Dashboard';
import { AdminRequireAuth } from './components/admin/AdminRequireAuth';
import { default as ShowCategories } from './components/admin/category/Show';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          />
          <Route
            path="/admin/category"
            element={
              <AdminRequireAuth>
                <ShowCategories />
              </AdminRequireAuth>
            }
          />
          <Route
            path="/admin/brand"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
