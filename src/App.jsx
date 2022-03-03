import './App.css';
import NavigationBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import Tech from './components/Tech/Tech';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
   return (
    <div className='App'>
      <Router basename='/'>
      <NavigationBar/>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/tech' element={<Tech />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
