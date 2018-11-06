import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

// function Index(props) {
//   return <div>Hello React!</div>;
// };
function Index(props) {
    return <h1>Hello, {props.name}</h1>;
  }

ReactDOM.render(<Index name="React!" />, document.getElementById("index"));