import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import TopNavBar from './TopNavBar.js'
import Banner from './Banner.js'
import {styles} from './styles/styles.js'
import AppColors from './styles/AppColors.js'

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
            style={styles.PageHeader}
            vertical
        >
            <TopNavBar/>
            <Banner/>
        </Segment>
    
    </header>
    );
  }
}
    
    
export default PageHeader;