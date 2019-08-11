import React from 'react';


// Adds class About to the class that is React.Component, an existing library
class SubHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.increaseNumber = this.increaseNumber.bind(this);
  }

  increaseNumber() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log('Render!');
    return (
      <div>
        <h1>This is a banner that expands when you hover click a button</h1>
        <button onClick={this.increaseNumber}>Click me!</button>
      </div>
    );
  }
}

export default SubHeader;