import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Menu, Segment, Visibility, Link} from 'semantic-ui-react'
import {ThemeProvider} from './styles/styles.js'

const AppColors = ThemeProvider.getThemeColor('MainTheme')

class TopNavBar extends Component {

    state = {
        menuStyle: {background: AppColors.secondary},
        themeColors: ThemeProvider.getThemeColor('MainTheme'),
        themeName: 'MainTheme'
    }

    hideFixedMenu = () => this.setState({
        fixed: false,
        menuStyle: {background: this.state.themeColors.secondary}
    })

    showFixedMenu = () => this.setState({
        fixed: true,
        menuStyle: {background: this.state.themeColors.secondaryDark}
    })


    handleItemClick = (e, {name, to}) => {
        console.log('clcik' + 'name' + 'to: ' + to)
        this.setState({activeItem: name})
        if (to != null) {
            this.props.history.push({pathname: to});
        }
    }

    handleResultClicked = (e, {name, to}) => {
        let themeName = this.state.themeName == "TestTheme" ? "MainTheme" : "TestTheme"
        this.props.setTheme(themeName)
        console.log("result clicked")
        let fixedState = this.state.fixed ? "secondaryDark" : "secondary"
        this.setState((prevState, props) => {
                return {
                    themeColors: ThemeProvider.getThemeColor(themeName),
                    themeName: themeName,
                    menuStyle: {background: ThemeProvider.getThemeColor(themeName)[fixedState]}

                }
            }
        )

        //
        this.forceUpdate();

    }

    render() {
        const {activeItem} = this.state
        const {fixed} = this.state

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
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} to='/'/>
                        <Menu.Item
                            name='shop'
                            to='/shop'
                            active={activeItem === 'shop'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="ToggleTheme"
                            to='/product/id_443'
                            active={activeItem === 'theme'}
                            onClick={this.handleResultClicked}
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