import React from 'react';

class Bucc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucctastic: false,
      name: '',
    };
  }

  render() {
    return (
      <div>
        <h1>This is the bucctastic page</h1>
        
      </div>
    );
  }


}


export default Bucc;

// This won't compile when in render :( 
// <a href="https://www.cse.unsw.edu.au/~richardb/" target="_blank"><img src = "https://i.imgur.com/LtQMmKq.png" alt = "Attractive Chad" width = 50vw style = "float:left; padding:5px; margin-top: 20px; margin-right: 10px"></a>