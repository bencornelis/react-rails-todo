import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoComplete } from './../actions';
import './../styles/Todo.css';
import FontAwesome from 'react-fontawesome';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  handleCompleteClick() {
    const { id, completed } = this.props;
    this.props.dispatch(toggleTodoComplete(id, completed));
  }

  handleDeleteClick() {
    this.props.dispatch(deleteTodo(this.props.id));
  }

  render() {
    const todoClass = this.props.completed ? 'complete' : 'incomplete';
    let completeMark;
    if (this.props.completed) {
      completeMark = <FontAwesome name='check-circle-o' size='2x' />
    } else {
      completeMark = <FontAwesome name='circle-thin' size='2x' />
    }

    return (
      <tr>
        <td>
          <button onClick={this.handleCompleteClick}>{completeMark}</button>
        </td>
        <td>
          <span className={todoClass}>{this.props.title}</span>
        </td>
        <td>
          <button onClick={this.handleDeleteClick}>
            <FontAwesome name='times' size='2x' />
          </button>
        </td>
      </tr>
    )
  }
}

export default connect()(Todo);