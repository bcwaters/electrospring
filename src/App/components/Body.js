
import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'




class Body extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

  render() {
  return (
    <div className="react">
      
      
      
    <Container>
      <Grid columns='equal'>
        <Grid.Row columns='equal' >
            <Grid.Column style={{padding:"50px"}}>
                <h1> &#9832; ElectroSpring &#9832;</h1>
                <video autoPlay loop muted style={{paddingTop:"50px"}}>
                    <source src="https://media.giphy.com/media/vaqDtYea8ynoA/giphy.mp4" type="video/mp4"/>
                </video>
            </Grid.Column>
             <Grid.Column >
                
             <br></br>
                <h2 style={{paddingLeft : '100px'}}> &#9889; Replenish yourself  </h2>
                <br></br>
                <h2 style={{paddingLeft : '100px'}}>  &#9764; Stay strong </h2>
                <br></br>
                <h2 style={{paddingLeft : '100px'}}>  &#9753; Be natural</h2>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

      
    
    </div>
    );
  }
}
    
    
export default Body;