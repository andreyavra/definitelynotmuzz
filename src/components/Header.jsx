import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';

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
        MUZZWEED | <Link to="/">Home</Link> | <Link to="/about">About</Link> |&nbsp;
        <Link to="/Bucc">Bucc</Link> | <span class="text_button" onClick={this.expand_into_subheader}>Expand Me!</span>

      {this.state.subhead && ( <SubHeader/> )}
      </div>

    );
  }
}

export default Header;
