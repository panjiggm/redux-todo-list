import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoShow from './TodoShow'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <TodoList />
        <TodoShow />
      </div>
    )
  }
}

export default App
