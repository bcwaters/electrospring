
import React, { Component } from 'react';
import { Table, Container, Divider, Grid, Header, Image, Segment, Button, Icon } from 'semantic-ui-react'
import LeftColumnBody from './LeftColumnBody.js'
import RightColumnBody from './RightColumnBody.js'




class Body extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

  render() {
  return (
    <main className="react">
      
    <Container>
      <Grid columns='equal'>
        <Grid.Row columns='equal' style={{padding:"50px"}} >
            <Grid.Column >
                <LeftColumnBody />
            </Grid.Column>
             <Grid.Column >
                 <RightColumnBody />
         
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

      
    
    </main>
    );
  }
}
    
    
export default Body;