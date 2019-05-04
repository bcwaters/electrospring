import React, {Component} from 'react';
import {Item, Grid, Header} from 'semantic-ui-react'
import ShopViewBanner from './ShopViewBanner.js'
import ProductGrid from './ProductGrid.js'


class ShopView extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };

    }

    componentDidMount() {
        console.log('query values: ' + this.props.location.search)
    }

    render() {
        return (
            <main className="react">

                <ShopViewBanner/>
                <ProductGrid/>

            </main>
        );
    }
}


export default ShopView;