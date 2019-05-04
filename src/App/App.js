import React, {Component} from "react";
import {Segment} from 'semantic-ui-react'
import TopNavBar from './components/TopNavBar.js'
import HomeView from './components/HomeView/HomeView.js'
import ShopView from './components/ShopView/ShopView.js'
import ProductView from './components/ProductView/ProductView.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Primary colors for design https://paletton.com/#uid=52Q0u0kllllaFw0g0qFqFg0w0aF


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <TopNavBar/>
                    <Switch>
                        <Route exact path='/' component={HomeView}/>
                        <Route path='/shop' component={ShopView}/>
                        <Route path='/product/:productId' component={ProductView}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;