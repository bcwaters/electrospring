import React, { Component } from 'react';
import { Item, Grid, Header } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";



class Product extends Component {

    handleItemClick = (e) => {
            console.log('clickd product')
    }
    
  render() {
      let product = this.props.product
  return (
    <div>
        { !!product ?
            <Item   key={product.productId} 
                    onClick={this.handleItemClick} 
                    to={'/product/'+ product.productId}
            >
      
            <Item.Image size='small' src={product.img} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='h2'>{product.title}</Item.Header>
                    <Item.Meta>{product.price}</Item.Meta>
                    <Item.Description>
                        {product.description}
                    </Item.Description>
                </Item.Content>
            </Item>
      : "no product found"
      }
        </div>
    )
  }
}
    
    
export default withRouter(Product);