import React, { Component} from "react";
import { Segment } from 'semantic-ui-react'
import PageHeader from './components/PageHeader.js'
import AngleDivider from './components/AngleDivider.js'
import Body from './components/Body.js'

//Primary colors for design https://paletton.com/#uid=52Q0u0kllllaFw0g0qFqFg0w0aF


class App extends Component{
  render(){
    return(
      <div className="App">
        <PageHeader/>
        
        <Body/>
        <AngleDivider/>
         <Body/>
        <AngleDivider/>
         <Body/>
         <Body/>
      </div>
    );
  }
}

export default App;