
import React, { Component } from 'react';

class LeftColumnBody extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

  render() {
  return (
    <div className="react">
           <br></br>
                <h2 style={{paddingLeft : '100px'}}> &#9889; Replenish yourself  </h2>
                <br></br>
                <h2 style={{paddingLeft : '100px'}}>  &#9764; Stay strong </h2>
                <br></br>
                <h2 style={{paddingLeft : '100px'}}>  &#9753; Be natural</h2>
    </div>
    );
  }
}
    
export default LeftColumnBody;