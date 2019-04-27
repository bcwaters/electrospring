
import React, { Component } from 'react';
import { Table} from 'semantic-ui-react'

class LeftColumnBody extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

  render() {
  return (
    <div className="react">
                <Table basic style={{border:'none'}}>
      
                    <Table.Header> 
                        <Table.Row>     
                            <Table.HeaderCell>
                                <h1 style={{textAlign:'center'}}>&#9832; ElectroSpring &#9832;</h1>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
      
                    <Table.Body> 
                        <Table.Row>     
                            <Table.Cell>
                                <video autoPlay loop muted>
                                    <source src="https://media.giphy.com/media/vaqDtYea8ynoA/giphy.mp4" type="video/mp4"/>
                                </video>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
        
                </Table>
    </div>
    );
  }
}
    
export default LeftColumnBody;