import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react'
import Banner from './Banner.js'

class PageHeader extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <header className="react">

                <Segment
                    inverted
                    textAlign='center'
                    style={this.props.styles.PageHeader}
                    vertical
                >
                    <Banner/>
                </Segment>

            </header>
        );
    }
}


export default PageHeader;