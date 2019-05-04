import React, {Component} from 'react';

class PageHeader extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div style={this.props.styles.AngleDivider}>
            </div>
        );
    }
}


export default PageHeader;