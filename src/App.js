import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import {Routes, Route} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Realisations from "./Pages/Realisations";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import MentionsLegales from "./Pages/MentionsLegales";
import Accueil from "./Pages/Accueil";
import TopButton from "./Components/TopButton";
import GithubProfile from "./Components/GithubProfile";





function App() {

  useEffect(() => {
    const styleElement = document.querySelector('style');

    if (styleElement) {
      styleElement.removeAttribute('type');
    }
  }, []);

  /*Bouton "retour en haut" lorsqu'on se trouve en bas de la page*/
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const scrollHeight = document.body.scrollHeight;
      const isBottom = scrollPosition >= scrollHeight;

      setShowTopButton(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisations" element={<Realisations/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/MentionsLegales" element={<MentionsLegales/>}></Route>
          <Route path="/GithubProfile" element={<GithubProfile/>}></Route>
        </Routes>
        {showTopButton && <TopButton />}
        <Footer/>
    </div>
  );
}

export default App;
