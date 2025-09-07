import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import './App.css';
import {Outlet} from "react-router-dom"
function App() {
  return (
   <div>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
   </div>
  );
}

export default App;
