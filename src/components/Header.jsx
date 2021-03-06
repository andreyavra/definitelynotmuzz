import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subhead: false,
    };

    this.expand_into_subheader = this.expand_into_subheader.bind(this);
  }

  expand_into_subheader() {
    this.setState({
      subhead: !this.state.subhead,
    });
  }

  render() {
    return (
      <div>
      <div className = "header">
        NOINO <span class="text_button" onClick={this.expand_into_subheader}>Expand Me!</span>

      {this.state.subhead && ( <SubHeader/> )}

      </div>

      <div className = "navi">

      <div className = "navLink">
       <Link to="/">HOME</Link> 
      </div>

      <div className = "navLink">
       <Link to="/about">ABOUT</Link> 
       </div>
       <div className = "navLink">
       <Link to="/Bucc">BUCC</Link> 
       </div>


      </div>
      <div className = "banner">
       

       </div>
      </div>


    );
  }
}

export default Header;
