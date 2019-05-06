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
                shop<br></br>Banner Will go HEre<br></br>Maybe other info like count of and page number
            </div>
        );
    }
}


export default ShopViewBanner;