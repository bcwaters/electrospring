import React, { Component} from "react";
import "./App.css";
import TopNavBar from './components/TopNavBar.js'
import Body from './components/Body.js'

class App extends Component{
  render(){
    return(
      <div className="App">
        <TopNavBar/>
        <Body/>
      </div>
    );
  }
}

export default App;