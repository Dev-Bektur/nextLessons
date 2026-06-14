// ClassCounter.jsx

import React, { Component } from 'react'

export default class ClassCounter extends Component {
  state={
    counter:5
  }
  componentDidMount(){
     console.log('component did mount-jaraldy');
  }
  componentDidUpdate(){
     console.log('component did update');
  }
  componentWillUnmount(){
     console.log('component is killed');
  }
  plus=()=>{
      this.setState((prevState)=>{
         return {counter: prevState.counter+1}
      })
  }
  minus=()=>{
      this.setState((prevState)=>{
         return {counter: prevState.counter-1}
      })
  }
  render() {
    return (
      <div>
         <h2>{this.state.counter}</h2>
         <button onClick={this.plus}>+</button>
         <button onClick={this.minus}>-</button>
         <button onClick={this.props.onChangeKill}>delete</button>
      </div>
    )
  }
}

// FuncCounter.jsx
import React, { useEffect, useState } from 'react'

const FuncCounter = ({onChangeKill}) => {
    const [counter, setCounter]=useState(11)
    const plus=()=>{
        setCounter(counter+1)
    }
    const minus=()=>{
        setCounter(counter-1)
    }
    useEffect(()=>{
        console.log('jaraldy je ozgordu');
        return ()=>{
            console.log('killed');
        }
    })
    return (
     <div>
        <h2>{counter}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={onChangeKill}>delete</button>
     </div>
    )
}

export default FuncCounter

// App.jsx
import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import FuncCounter from './components/FuncCounter'

const App = () => {
  const [isKill, setIsKill]=useState(false)
  const changeIsKill=()=>{
    setIsKill(!isKill)
  }
  return (
    <div>
       {!isKill ? <ClassCounter onChangeKill={changeIsKill}/> : <button onClick={changeIsKill}>back</button>}
       {/* <ClassCounter onChangeKill={changeIsKill}/> */}
       <hr />
       {!isKill ? <FuncCounter onChangeKill={changeIsKill}/> : <button onClick={changeIsKill}>back</button>}
    </div>
  )
}

export default App