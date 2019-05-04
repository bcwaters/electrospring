import React, {Component} from 'react';
import Body from './Body.js'
import AngleDivider from './AngleDivider.js'
import HomePageHeader from './HomePageHeader.js'


class HomeView extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'

        };
    }

    render() {
        return (
            <main className="react">
                <HomePageHeader styles={this.props.styles}/>
                <Body/>
                <AngleDivider styles={this.props.styles}/>
                <Body/>
                <AngleDivider styles={this.props.styles}/>
                <Body/>
                <Body/>
            </main>
        );
    }
}


export default HomeView;