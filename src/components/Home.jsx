import React from 'react';

class Home extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      count: 0,
      expanded1: false,
    };

  this.expand1 = this.expand1.bind(this);
  }

  expand1() {
  	this.setState({
  		expanded1: 1 - this.state.expanded1,
  	});
  }


  render() {
    return (
    <div>
	    <h1>Welcome to my website</h1>

	    <button onClick={this.expand1}>Click me!</button>
	    <div>The count is {this.state.count}</div>
	    {
	      (this.state.expanded1 === 1) && (
	          <div>Expanded!</div>
	      )
	    }
	    <div class="container_large_orange">
	      I hope this works...
	    </div>
	  </div>
    );

  }
}

export default Home;