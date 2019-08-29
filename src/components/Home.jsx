import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css'

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
	    

	    <div className="container_large_white">
      <div>
      <img src = "https://i.imgur.com/Cgmsteh.jpg" className = "mainstorycont" alt = "hackermans" />

      <img src = "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1.jpg" className = "sidestory1" alt = "codecode" />
      </div>
	      <div className="container_text"ßß>
        Top 10 Buzzfeed Articles
        </div>
		  <button onClick={this.expand1}>Click me!</button>
		  {(this.state.expanded1 === 1) && 
	      (
	          <div>Expanded!</div>
			  // I DONT KNOW HOW TO ADD MARGINS TO THESE ELEMENTS :( it ok

	      )
	      }
	    </div>


	    
	</div>
    );

  }
}


export default Home;