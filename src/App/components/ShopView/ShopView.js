import React, { Component } from 'react';
import { Table, Container, Divider, Grid, Header, Image, Segment, Button, Icon } from 'semantic-ui-react'



class ShopView extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

  render() {
  return (
    <main className="react"> 
   Shop Now!
    </main>
    );
  }
}
    
    
export default ShopView;