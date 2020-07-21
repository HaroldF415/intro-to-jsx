import React from "react";
import ReactDOM from "react-dom";

const fName = "Harold";
const lName = "Fachin";
const luckyNum = 14;

// You can inject JavaScript Expressions into ReactDOM.render but you can't inject JavaScript Statements
// Look up JS Expressions vs. JS Statements
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Using Javascript expressions: {Math.floor(Math.random() * 10) + 1}</p>
    <p>Using a variable inside index.js: {luckyNum}</p>
  </div>,
  document.getElementById("root")
); // only renders one HTML element
