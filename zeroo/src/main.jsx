import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx';
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import Product from "./landing_page/products/ProductPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx';
import Support  from './landing_page/Support/SupportPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path ="/" element ={<HomePage/>} />
    <Route path ="/signup" element ={<Signup/>}/> 
    <Route path ="/about" element ={<AboutPage/>}/> 
    <Route path ="/product" element ={<Product/>}/> 
    <Route path ="/pricing" element ={<Pricing/>}/>
    <Route path="/support" element={<Support/>}/> 
     <Route path ="*" element ={<NotFound/>}/>
    </Routes> 
     <Footer/>
    </BrowserRouter>
);
