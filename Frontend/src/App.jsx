import React from 'react';
import "./App.css";
// import {BrowserRouter as Router} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navbar from "../components/navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Services from "../components/Services.jsx";
import About from "../components/about.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/footer.jsx";


const App = () => {
  return (
  <div>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Services></Services>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
    <Toaster></Toaster>    
  </div>  
  )
}

export default App;
 
