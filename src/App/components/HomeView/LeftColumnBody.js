import React, {Component} from 'react';
import {Table} from 'semantic-ui-react'

class LeftColumnBody extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <section className="react">
                <Table basic style={{border: 'none'}}>


                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <video autoPlay loop muted>
                                    <source src="https://media.giphy.com/media/vaqDtYea8ynoA/giphy.mp4"
                                            type="video/mp4"/>
                                </video>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                </Table>
            </section>
        );
    }
}

export default LeftColumnBody;