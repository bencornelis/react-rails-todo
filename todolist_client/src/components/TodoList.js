import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchAllTodos, toggleAddTodoForm, clearCompleted, filterTodos
} from './../actions';
import Todos from './Todos';
import TodoForm from './TodoForm';
import TodoNav from './TodoNav';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodoClick        = this.handleAddTodoClick.bind(this);
    this.handleClearCompletedClick = this.handleClearCompletedClick.bind(this);
    this.fetchAllTodos             = this.fetchAllTodos.bind(this);
    this.filterTodos               = this.filterTodos.bind(this);
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  handleAddTodoClick() {
    this.props.dispatch(toggleAddTodoForm());
  }

  handleClearCompletedClick() {
    this.props.dispatch(clearCompleted());
  }

  fetchAllTodos() {
    this.props.dispatch(fetchAllTodos());
  }

  filterTodos(completed) {
    this.props.dispatch(filterTodos(completed));
  }

  render() {
    return (
      <div>
        <Todos todos={this.props.todos} />
        {this.props.showForm ? (
          <TodoForm />
        ) : (
          <button onClick={this.handleAddTodoClick}>Add todo</button>
        )}
        <button onClick={this.handleClearCompletedClick}>Clear completed</button>
        <TodoNav
          todoFilter={this.props.todoFilter}
          handleAllClick={() => this.fetchAllTodos() }
          handleActiveClick={() => this.filterTodos(false)}
          handleCompletedClick={() => this.filterTodos(true)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  showForm: state.isCreating,
  todoFilter: state.todoFilter,
});

export default connect(mapStateToProps)(TodoList);