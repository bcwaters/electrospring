import React, {Component} from 'react';
import {Table, Container, Divider, Grid, Header, Image, Segment, Button, Icon} from 'semantic-ui-react'


class Banner extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className="react">
                <Container text>

                    <Header
                        as='h1'
                        content='&#9832; ElectroSpring &#9832;'
                        inverted
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '0',
                        }}
                    />

                </Container>

            </div>
        );
    }
}


export default Banner;