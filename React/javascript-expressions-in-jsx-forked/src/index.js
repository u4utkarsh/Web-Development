import React from "react";
import ReactDOM from "react-dom";

const fname = "Utkarsh";
const lName = "Gandhi";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lName}!
    </h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
