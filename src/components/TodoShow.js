import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../store/actions/todo'

class TodoShow extends Component {
  handleClick = removeById => {
    if (window.confirm('Are you sure?')) {
      this.props.deleteTodo(removeById)
    }
  }
  render() {
    console.log(this.props.todos)
    return (
      <div className="ui middle aligned divided list">
        {this.props.todos.map((todo, index) => {
          // console.log(todo)
          return (
            <div className="item" key={index}>
              <div className="right floated content">
                <button className="ui youtube button" onClick={() => this.handleClick(index)}>
                  Remove
                </button>
              </div>
              <div className="content">{todo}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  todos: store.todos
})

export default connect(
  mapStateToProps,
  { deleteTodo }
)(TodoShow)
