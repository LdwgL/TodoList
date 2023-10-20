import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoInfos from "./TodoInfos";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import TodoActions from "./TodoActions";

const todosArr = [
  {
    id: 1,
    name: "truc",
  },

  {
    id: 2,
    name: "troc",
  },

  {
    id: 3,
    name: "trec",
  },
];

const TodoListComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("TODOS"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function majTodos(id) {
    console.log("Modification du state des todos", id);
    const newTodos = [...todos];
    // crée un clone de todos dans newTodos.
    const todo = newTodos.find((todo) => todo.id === id);
    // renvoie l'élément du tableau todosArr correspondant a id.
    todo.done = !todo.done;
    setTodos(newTodos);
  }

  function addTodo(name) {
    console.log("appelée ddepuis todoForm");
    const newTodo = { id: uuidv4(), name: name, done: false };
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }

  function clearDone() {
    const unDoneTodos = todos.filter((todo) => todo.done === false);
    setTodos(unDoneTodos);
    console.log(unDoneTodos);
    console.log("clearDone");
  }

  function handlecheckAll(boolCheck) {
    const allTodos = [...todos];
    allTodos.map((todo) => (todo.done = boolCheck));
    setTodos(allTodos);
  }

  return (
    <>
      <TodoInfos todos={todos} />
      <TodoList todos={todos} majTodos={majTodos} />
      <TodoForm addTodo={addTodo} />
      <div>
        <TodoActions clearDone={clearDone} handlecheckAll={handlecheckAll} />
      </div>
    </>
  );
};

export default TodoListComponent;
