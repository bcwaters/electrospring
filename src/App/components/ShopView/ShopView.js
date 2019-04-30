import React, { Component } from 'react';
import { Item, Grid, Header } from 'semantic-ui-react'


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
        
        <div style={{border:"solid 4px", minHeight:'50px', minWidth:'200px'}}>
        shop<br></br>Products<br></br>count
      
      </div>
      
      <Grid style={{margin:'50px'}}>
      {/* Heads up! Grid.Row is not mandatory, Grid.Column is enough for grid to work */}
      <Grid.Row columns={3}>
        <Grid.Column>
            <Item>
      
            <Item.Image size='small' src='https://i.ebayimg.com/images/g/FDMAAOSwAYtWIZE2/s-l500.jpg' />
      
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='h2'>Electrol life</Item.Header>
                    <Item.Meta>$100</Item.Meta>
                    <Item.Description>
                        alcoholic troll beverage
                    </Item.Description>
                </Item.Content>
            </Item>
        </Grid.Column>
        <Grid.Column>
            <Item>
      <Item.Image size='small' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Aerial_view_of_Grand_Prismatic_%2823428929375%29.jpg/300px-Aerial_view_of_Grand_Prismatic_%2823428929375%29.jpg' />

      <Item.Content>
        <Item.Header as='h2'>ElectroSpring</Item.Header>
       <Item.Extra>$50</Item.Extra>
        <Item.Meta>Bottled Mineral Water</Item.Meta>
        <Item.Description>
          sourced from a natural spring
        </Item.Description>
       
      </Item.Content>
    </Item>
        </Grid.Column>
        <Grid.Column>
            <Item>
              
                <Item.Image centered='true' size='small' src='https://i.ebayimg.com/images/g/FK8AAOSwwfFcWfze/s-l1600.jpg' />
        <Item.Content verticalAlign='middle'>
                    <Item.Header as='h2'>Electrol Life original formula</Item.Header>
                    <Item.Meta>$100</Item.Meta>
                    <Item.Description>
                        Troll moonshine made with original formula
                    </Item.Description>
                </Item.Content>
            </Item>
        </Grid.Column>
        
      </Grid.Row>
      </Grid>
   
    </main>
    );
  }
}
    
    
export default ShopView;