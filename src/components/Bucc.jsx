import React from 'react';
import "./Bucc.css";
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

        <h1 className = "buccText">This is the bucccccctastic page</h1>
        <a href="https://www.cse.unsw.edu.au/~richardb/" target="_blank">

          <img src = "https://i.imgur.com/LtQMmKq.png" className="buccGod" alt = "Attractive Chad" />

        </a>
        
      </div>
    );
  }


}


export default Bucc;


