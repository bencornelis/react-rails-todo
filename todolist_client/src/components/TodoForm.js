import React, { Component } from 'react';
import { createTodo } from './../actions';
import { connect } from 'react-redux';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { _title } = this.refs;
    const title = _title.value.trim();

    this.props.dispatch(createTodo(title));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref='_title' />
          <button>Add to list</button>
        </form>
      </div>
    )
  }
}

export default connect()(TodoForm);