import React, { Component } from 'react';
import { Item, Grid, Header } from 'semantic-ui-react'
import ShopViewBanner from './ShopViewBanner.js'
import productList from './productList.js'


class ProductGrid extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };

    }
    
    componentDidMount(){
    }
    
  render() {
  return (
  
      
      <Grid style={{margin:'50px'}}>
      <Grid.Row columns={3}>
      
      {productList.map(product => (
        <Grid.Column>
            <Item key={product.productId}>
      
            <Item.Image size='small' src={product.img} />
      
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='h2'>{product.title}</Item.Header>
                    <Item.Meta>{product.price}</Item.Meta>
                    <Item.Description>
                        {product.description}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Grid.Column>
      
      ))}
      
        
      </Grid.Row>
      </Grid>
   
    );
  }
}
    
    
export default ProductGrid;