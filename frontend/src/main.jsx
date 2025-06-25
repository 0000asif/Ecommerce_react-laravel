import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AdminAuthProvider } from './components/context/AdminAuth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminAuthProvider>
      <App />
    </AdminAuthProvider>
  </React.StrictMode>
);
