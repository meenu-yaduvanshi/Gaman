// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Gaman from './components/Gaman';
// import About from './components/About';
// import Discover from './components/Discover';
// import Services from './components/Services';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  
  return (
    <>
      <div id='home-main-container'>
        <Nav />
        <Gaman/>
        <Footer/>

      </div>
    </>
  );
};

export default App;
