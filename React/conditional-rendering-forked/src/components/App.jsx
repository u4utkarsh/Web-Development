import React from "react";
import Login from "./Login";

var isLoggedIn = false;

var currentTime = new Date(2020, 5, 12, 13).getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Hello</h1> : <Login />

        // currentTime > 12 ? <h1>Why are u still working?</h1> : null

        // currentTime > 12 && <h1>Why are u still working?</h1>
      }
    </div>
  );
}

export default App;
