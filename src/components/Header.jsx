import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded_expand_me: false,
    };

    this.expanded_me = this.expanded_me.bind(this);
  }

  expanded_me() {
    this.setState({
      expanded_me: 1-this.expanded_me,
    });
  }

  render() {
    return (
      <div>
        MUZZWEED | <Link to="/">Home</Link> | <Link to="/about">About</Link> |&nbsp;
        <Link to="/Bucc">Bucc</Link> | <span class="expanding_header" onClick={this.expanded_me}>Expand Me!</span>
      </div>

      // {
      //   (this.state.expanded_expand_me === true) && (
      //     <SubHeader />
      //   )
      // }

    );
  }
}

export default Header;
