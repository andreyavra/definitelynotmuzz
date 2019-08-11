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

	    <div className="container_large_orange">
	      <div className="container_text">Top 10 Buzzfeed Articles</div>
	    </div>


	    {
	      (this.state.expanded1 === 1) && 
	      (
	          <div>Expanded!</div>
	      )
	    }
	  </div>
    );

  }
}

export default Home;