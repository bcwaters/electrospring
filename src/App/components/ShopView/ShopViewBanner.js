import React, {Component} from 'react';


class ShopViewBanner extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };

    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{border: "solid 4px", minHeight: '50px', minWidth: '200px'}}>
                shop<br></br>Products<br></br>count
            </div>
        );
    }
}


export default ShopViewBanner;