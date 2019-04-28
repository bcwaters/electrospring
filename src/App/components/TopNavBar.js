
import React, { Component } from 'react';
import { Menu, Segment, Visibility } from 'semantic-ui-react'
import AppColors from './styles/AppColors.js'

class TopNavBar extends Component {

     state = {}

    state = {}

    hideFixedMenu = () => this.setState({ 
        fixed: false, 
        menuStyle:{background:'transparent'}
    })

    showFixedMenu = () => this.setState({
        fixed: true,
        menuStyle:{background:AppColors.secondaryDark}  
    })

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { children } = this.props
        const { fixed } = this.state
        
        return (
            <header>
             <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}
            >
          
        <Menu style={this.state.menuStyle}
              fixed={fixed ? 'top' : null}
              inverted={true}
              pointing={!fixed}
              secondary={true}
              size='large'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='products'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='results'
            active={activeItem === 'results'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
          
        </Visibility>
      </header>
        );
    }
}
    
    
export default TopNavBar;