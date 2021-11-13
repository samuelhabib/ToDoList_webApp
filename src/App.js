import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

const storagekey = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const { v4: uuidv4 } = require('uuid');
  
  useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem(storagekey))
   if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function Cleartodo(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function Clear(){
    setTodos([])
  }

  function Addtodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  return (
    <div>
    <center>
    <TodoList todos = {todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button className=" button button2" onClick={Addtodo}>Add Todo</button>
    <button className=" button button2" onClick={Clear}>Clear</button>
    <button className=" button button2" onClick={Cleartodo}>Clear Complete</button>
    <div>{todos.filter(todo => !todo.complete).length} Left to Do</div> 
    </center>
    </div>
  )    
}

export default App;
