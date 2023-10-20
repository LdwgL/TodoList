    import React from 'react'

    const TodoInfos = ({todos}) => {
    return (
       
        <>
        <span style={{color:"green" }}>
        {
            todos.filter(todo => todo.done===true).length 
        }
        Done
        
        </span>
        <span> / </span>

        <span style={{color:"red" }}>
        {
            todos.filter(todo => todo.done===false).length 
        }
        To do
        </span>

        </>
    )
    }

    export default TodoInfos