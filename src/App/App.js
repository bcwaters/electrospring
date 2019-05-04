import React, {Component} from "react";
import TopNavBar from './components/TopNavBar/TopNavBar.js'
import HomeView from './components/HomeView/HomeView.js'
import ShopView from './components/ShopView/ShopView.js'
import ProductView from './components/ProductView/ProductView.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from './components/styles/ThemeProvider.js'

//Primary colors for design https://paletton.com/#uid=52Q0u0kllllaFw0g0qFqFg0w0aF


class App extends Component {
    state = {
        styles: ThemeProvider.getCss("MainTheme"),
        AppColor: ThemeProvider.getDefaultColor()
    }

    setTheme = (themeName) => {

        this.setState({
            styles: ThemeProvider.getCss(themeName),
            AppColor: ThemeProvider.getThemeColor(themeName)
        })
        console.log("theme set to: " + themeName)
        document.head.getElementsByTagName("style")[0].innerText = 'body{background-color: ' + ThemeProvider.getThemeColor(themeName).primary + '}'
    }

    render() {
        return (
            <Router>
                <div className="App" style={{backgroundColor: this.state.AppColor.primary}}>
                    <TopNavBar setTheme={this.setTheme}/>
                    <Switch>
                        <Route exact path='/' render={(props) => <HomeView {...props} styles={this.state.styles}/>}/>
                        <Route path='/shop' component={ShopView}/>
                        <Route path='/product/:productId' component={ProductView}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;