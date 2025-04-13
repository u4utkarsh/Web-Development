import React from "react";

// strike through the task when it is completed
// function ToDoItem(props) {
//   const [isDone, setIsDone] = React.useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.task}
//       </li>
//     </div>
//   );
// }

// Delete task form array when it is completed
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.task}</li>
    </div>
  );
}

export default ToDoItem;
