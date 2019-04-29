
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Menu, Segment, Visibility, Link } from 'semantic-ui-react'
import AppColors from './styles/AppColors.js'

class TopNavBar extends Component {

    state = {}

    hideFixedMenu = () => this.setState({ 
        fixed: false, 
        menuStyle:{background:AppColors.secondary}
    })

    showFixedMenu = () => this.setState({
        fixed: true,
        menuStyle:{background:AppColors.secondaryDark}  
    })


    handleItemClick = (e, { name, to }) => {
        console.log('clcik' + 'name' + 'to: ' + to)
        this.setState({ activeItem: name })
        if(to !=null){
            this.props.history.push({pathname: to});    
        }
                             
    }

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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}   to='/' />
          <Menu.Item
            name='shop'
            to='/shop'
            active={activeItem === 'shop'}
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
    
    
export default withRouter(TopNavBar);