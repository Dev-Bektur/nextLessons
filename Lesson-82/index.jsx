// App.jsx


const addTodo=(newTodo)=>{
  console.log(newTodo);
  const oldId=todoData.map(el=>el.id)
  console.log(oldId.at(-1));
  const todo={title:newTodo, important:false, done:false, id:oldId.at(-1)+1 || 1}
  console.log(todo);
  setTodoData([...todoData, todo])
}

return (
  <div className='container'>
    <TodoHeader/>
    <TodoSearch/>
    <TodoList todo={todoData} onDone={doneTodo} onImp={impTodo} onDel={delTodo}/>
    <TodoAdd onAddTodo={addTodo}/>
  </div>
)

export default App

// TodoAdd.jsx

export default class TodoAdd extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input
          type="text"
          className='form-control'
          placeholder='Add new todo'
          value={this.state.text}
          onChange={this.setText}
        />
        <button
          className='btn btn-info'
          onClick={()=>{
            if(this.state.text.trim()){
              this.props.onAddTodo(this.state.text)
              this.state.text=''
            }
          }}
        >
        Add</button>
      </div>
    )
  }
}