import React, {Component} from 'react';
import {Item, Grid, Header} from 'semantic-ui-react'
import productList from '../ShopView/productList.js'
import Product from './Product.js'


class ProductView extends Component {
    constructor() {
        super();
        this.state = {
            currentProduct: {}
        };
    }

    componentDidMount() {
        let passedId = this.props.match.params.productId
        let filteredList = productList.filter(function (product) {
            return product.productId == passedId
        })
        this.setState({
            currentProduct: filteredList[0]
        })
    }

    render() {
        return (
            <main className="react">


                <Product product={this.state.currentProduct}/>

            </main>
        );
    }
}


export default ProductView;