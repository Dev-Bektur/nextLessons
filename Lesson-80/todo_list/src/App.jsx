 import React, { useState } from 'react'
import TodoHeader from './components/todoHeader/TodoHeader'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/todoAdd/TodoAdd'

const App = () => {
  const [todoData, setTodoData]=useState(
    [
      {title: 'Learn new words', done: false, important: false, id:1},
      {title: 'do workouts', done: false, important: true, id:2},
      {title: 'Cook dinner', done: true, important: false, id:3},
    ]
  )
  const doneTodo=(id)=>{
    const index=todoData.findIndex(el=>el.id===id)
    const oldTodo=todoData[index]
    const updTodo={...oldTodo, done:!oldTodo.done}
   const before=todoData.slice(0, index)
   const after=todoData.slice(index+1)

   setTodoData([...before, updTodo, ...after])
  }

  const impTodo=(id)=>{
    const index=todoData.findIndex(el=>el.id===id)
    const oldTodo=todoData[index]
    const updTodo={...oldTodo, important:!oldTodo.important}
   const before=todoData.slice(0, index)
   const after=todoData.slice(index+1)

   setTodoData([...before, updTodo, ...after])
  }

  const delTodo=(id)=>{
    console.log(id);
    setTodoData(todoData.filter(el=>el.id!==id))
  }

  return (
    <div className='container'>
      <TodoHeader/>
      <TodoSearch/>
      <TodoList todo={todoData} onDone={doneTodo} onImp={impTodo} onDel={delTodo}/>
      <TodoAdd/>
    </div>
  )
}

export default App