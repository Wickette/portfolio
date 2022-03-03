import './App.css';
import NavigationBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import Tech from './components/Tech/Tech';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
   return (
    <div className='App'>
      <HashRouter>
      <NavigationBar/>
          <Routes>
              <Route path='/portfolio' element={<Home />} />
              <Route path='/portfolio/about' element={<AboutMe />} />
              <Route path='/portfolio/tech' element={<Tech />} />
              <Route path='/portfolio/portfolio' element={<Portfolio />} />
              <Route path='/portfolio/contact' element={<Contact />} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
