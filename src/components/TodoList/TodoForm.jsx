import React, { useRef } from 'react'

const TodoForm = ({addTodo}) => {

    const todoRef = useRef();

function handleClick(){

    console.log('valeur de l input :'  , todoRef.current.value);
    let name = todoRef.current.value;
    if(name ==="") return;
    addTodo(name);
    todoRef.current.value = null;
}


  return (
        <>
        
        <input ref={todoRef}type="text" />
        <button onClick={handleClick}>Ajouter</button>
        
        </>
  )
}

export default TodoForm