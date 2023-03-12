import React from 'react';
import './App.css';
import Footer from './components/Footer';
//import { BrowserRouter as Router,  } from 'react-router-dom';
import Nav from './components/Nav';
import Services from './components/Services';
import Welcome from './components/Welcome';

function App() {
 
  return (
    <div className="App">
      <div className="welcome">
      <Nav/>
      <Welcome />
      
      </div>
      <Services />
      <Footer />
     
    </div>
  );
}

export default App;
