import React from "react";
import ReactDOM from "react-dom";

// Importing App.jsx
import App from "./components/App";

// You can inject JavaScript Expressions into ReactDOM.render but you can't inject JavaScript Statements
// Look up JS Expressions vs. JS Statements

// The code below is not HTML do not use class to give it a class name
// Instead use className like in vanillaJS

ReactDOM.render(<App />, document.getElementById("root")); // only renders one HTML element
