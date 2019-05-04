import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import {ThemeProvider} from './App/components/styles/ThemeProvider.js'


const style = document.createElement('style')
let css = 'body{background-color: ' + ThemeProvider.getDefaultColor().primary + '}'
style.innerText = css
document.head.appendChild(style);


ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

