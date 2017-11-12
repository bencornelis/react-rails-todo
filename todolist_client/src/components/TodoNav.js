import React from 'react';
import './../styles/TodoNav.css';
import * as filters from './../constants/Filters';

function TodoNav(props) {
  const buttonClass = filterType => {
    return filterType === props.todoFilter ? 'selected' : 'unselected'
  }

  return (
    <div>
      <button
        className={buttonClass(filters.ALL)}
        onClick={props.handleAllClick}>
        All
      </button>
      <button
        className={buttonClass(filters.ACTIVE)}
        onClick={props.handleActiveClick}>
        Active
      </button>
      <button
        className={buttonClass(filters.COMPLETED)}
        onClick={props.handleCompletedClick}>
        Completed
      </button>
    </div>
  )
}

export default TodoNav;