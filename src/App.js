import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Link is like ahref except it doesn't redirect you and you have to 
// reference a file in the directory.

import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Bucc from './components/Bucc';

// These import, from files in the same directories, the different pages that you are able to control.


// // Adds class About to the class that is React.Component, an existing library
// class About extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: '',
//     };

//   this.increaseNumber = this.increaseNumber.bind(this);
//   }


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bucc" component={Bucc} />
      </div>
    </Router>
  );
}

export default App;
