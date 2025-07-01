import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import SignUpPage from './landing_page/signup/SignUpPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'
import LoginPage from './landing_page/signup/LoginPage.jsx' // ✅ Import LoginPage

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} /> {/* ✅ Add this route */}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

