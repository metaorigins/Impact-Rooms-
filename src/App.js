import React from 'react';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import HomePage from './views/Home/HomePage';
import Companies from './views/Comapnies/Comapnies';
import Investors from './views/Investors/Investors';
import AboutUs from './views/AboutUs/AboutUs';
import SignIn from './views/SignIn/SignIn';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Companies" element={<Companies />} />
        <Route exact path="/Investors" element={<Investors/>} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/SignIn" element={<SignIn/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
