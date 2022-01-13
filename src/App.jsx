import './App.css';
import NavigationBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Tech from './components/Tech/Tech';
import React from 'react'


function App() {
   return (
    <div className="App">
        <NavigationBar/>
        <Header/>
        <AboutMe/>
        <Tech/>
    </div>
  );
}

export default App;
