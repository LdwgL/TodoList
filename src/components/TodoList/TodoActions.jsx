import React from "react";

const TodoActions = ({clearDone, handlecheckAll}) => {
  return (
    <>
      <button onClick={clearDone}>Clear Done</button>
      <button onClick={() => handlecheckAll(true)}>Check All</button>
      <button onClick={() => handlecheckAll(false)}>Uncheck All</button>
   
    </>
  );
};

export default TodoActions
