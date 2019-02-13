import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/todo'

class TodoList extends Component {
  state = {
    todo: ''
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
    // console.log(this.state.todo)
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.todo === '') {
      window.alert('Please Add todo field !')
    } else {
      this.props.addTodo(this.state.todo)
      this.setState({ todo: '' })
    }
  }

  render() {
    return (
      <Fragment>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>My Todo List</label>
            <input
              type="text"
              name="todo"
              placeholder="Add Todo..."
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </div>

          <button className="ui button fluid" type="submit">
            Add Todo
          </button>
        </form>
      </Fragment>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(TodoList)
