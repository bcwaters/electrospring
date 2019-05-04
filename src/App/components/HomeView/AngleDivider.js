import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react'
import {styles} from '../styles/styles.js'


class PageHeader extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div style={styles.AngleDivider}>


            </div>
        );
    }
}


export default PageHeader;