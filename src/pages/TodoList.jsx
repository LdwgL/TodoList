import React from 'react'
import NavBar from '../components/NavBar'
import TodoListComponent from '../components/TodoList/TodoListComponent'

const TodoList = () => {
  return (
    <>
    <NavBar/>
    <h1>TodoList</h1>
    <TodoListComponent/>
    </>
  )
}

export default TodoList