import React from "react";
import ReactDOM from "react-dom";

import Hello1 from "./Hello1";
import Hello2 from "./Hello2";

function Index(props) {
    return (
      <div>
        <Hello1/>
        <Hello2/>
      </div>
    );
  }

ReactDOM.render(<Index/>, document.getElementById("index"));