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
        {/* <a href="https://www.cse.unsw.edu.au/~richardb/" target="_blank">
          <img src = "https://i.imgur.com/LtQMmKq.png" alt = "Attractive Chad" width = 500px style={{padding:5px; margin-top: 20px; margin-left: 150px}}>
        </a> */}
        
      </div>
    );
  }


}


export default Bucc;


