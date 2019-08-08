import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Link is like ahref except it doesn't redirect you and you have to 
// reference a file in the directory.

import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
// These import, from files in the same directories, the different pages that you are able to control.

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
