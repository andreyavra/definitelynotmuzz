import React from 'react';

class Bucc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucctastic: false,
      count: 0,
      name: '',
    };
  }

  render() {
    return (
      <div>
        <h1>This is the bucctastic page</h1>
        <button onClick={this.increaseNumber}>Click me!</button>
        <div>The count is {this.state.count}</div>
        {
          (this.state.count > 0) && (
              <div>Let's go!</div>
          )
        }
      </div>
    );
  }


}


export default Bucc;


