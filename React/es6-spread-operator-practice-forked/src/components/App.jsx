import React, { useState } from "react";

function App() {
  const tasks = [];
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, task];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
