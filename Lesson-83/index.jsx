// App.jsx

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

  const searchTodo=(arr, term)=>{
    if(term.length===0){
      return arr
    }
    return arr.filter(el=>el.title.toLowerCase().includes(term.toLowerCase()))
  }

  const filterTodo=(arr, filter)=>{
    if(filter==='All'){
      return arr
    }else if(filter==='Active'){
      return arr.filter(el=>!el.done)
    }else if(filter==='Done'){
      return arr.filter(el=>el.done)
    }
  }


  import React from 'react'

//   TodoHeader.jsx

const TodoHeader = ({active, done}) => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <h1>Todo List</h1>
      <h3>{active} more todo, {done} done</h3>
    </div>
  )
}

export default TodoHeader

// return

return (
    <div className='container'>
      <TodoHeader done={done} active={active}/>
      <TodoSearch filter={filter} setFilter={setFilter} onSearch={onSearch}/>
      <TodoList todo={filterTodo(searchTodo(todoData, search), filter)} onDone={doneTodo} onImp={impTodo} onDel={delTodo}/>
      <TodoAdd onAddTodo={addTodo}/>
    </div>
  )


// TodoSearch.jsx

  import React, { Component } from 'react'

export default class TodoSearch extends Component {
  state={
    term:''
  }

  buttons=[
    {name:'All'},
    {name:'Active'},
    {name:'Done'},
  ]

  setSearch=(e)=>{
    this.setState({term:e.target.value})
    this.props.onSearch(e.target.value)
  }

  render() {
    const btns=this.buttons.map((el)=>{
      const isActive=this.props.filter===el.name
      const clazz=isActive ? 'btn-info' : 'btn-outline-secondary'
      return <button
        key={el.name}
        className={`btn ${clazz}`}
        onClick={()=>this.props.setFilter(el.name)}
      >{el.name}</button>
    })

    return (
      <div className='d-flex'>
        <input 
          type="text" 
          className='form-control' 
          placeholder='Search todo'
          value={this.state.term}
          onChange={this.setSearch}
        />
        {btns}
      </div>
    )
  }
}