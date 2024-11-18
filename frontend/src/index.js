import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import { CategoryProvider } from "./context/CategoryContext";
import { BrandProvider } from "./context/BrandContext";
import { ProductProvider } from './context/ProductContext';
import { AuthenticateProvider } from './context/AuthenticateContex';

import Login from './pages/Login/Login';
import Brands from './pages//Brands/Brand';
import Categories from './pages/Categories/Categories';
import Products from "./pages/Products/Products";
// import Homepage from './pages/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Sole from './components/Sole/Sole';
import Ottice from './components/Vista/Vista';
import Vista from './components/Vista/Vista';

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthenticateProvider>
  <BrandProvider>
    <CategoryProvider>
      <ProductProvider>
      <BrowserRouter>
            <Routes>
              <Route path="/login"     element={<Login />} />
              <Route path="/brands"   element={<Brands />} />
              <Route path="/categories"  element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sole" element={<Sole />} />
              <Route path="/vista" element={<Vista />} />
              
              <Route path="/" element={<App />} />
            </Routes>
          </BrowserRouter>
      </ProductProvider>
    </CategoryProvider>
  </BrandProvider>
  </AuthenticateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();