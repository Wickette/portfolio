import './App.css';
import NavigationBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Tech from './components/Tech/Tech';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import React from 'react'


function App() {
   return (
    <div className="App">
        <NavigationBar/>
        <div className="sections">
          <Header/>
          <AboutMe/>
          <Tech/>
          <Portfolio/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
