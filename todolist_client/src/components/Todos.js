import React from 'react';
import Todo from './Todo';
import './../styles/Todos.css';

function Todos(props) {
  return (
    <div className='todos'>
      <table>
        <tbody>
          {props.todos.map(todo =>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Todos;