import './App.css';
import NavigationBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import React from 'react'


function App() {
   return (
    <div className="App">
        <NavigationBar/>
        <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;
