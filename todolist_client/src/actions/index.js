import * as types from './../constants/ActionTypes';
import * as filters from './../constants/Filters';
import TodosApi from './../api/TodosApi'

export const fetchAllTodos = () => {
  return function(dispatch) {
    return TodosApi.getTodos().then(json => {
      dispatch(loadTodos(json));
      dispatch(updateFilter(filters.ALL));
    });
  }
}

export const filterTodos = completed => {
  return function(dispatch) {
    return TodosApi.filterTodos(completed).then(json => {
      dispatch(loadTodos(json));

      const newFilter = completed ? filters.COMPLETED : filters.ACTIVE;
      dispatch(updateFilter(newFilter))
    });
  }
}

export const updateFilter = newFilter => ({
  type: types.UPDATE_FILTER,
  todoFilter: newFilter
})

export const loadTodos = todos => ({
  type: types.LOAD_TODOS,
  todos
})

export const toggleAddTodoForm = () => ({
  type: types.TOGGLE_FORM
});

export const createTodo = title => {
  return function(dispatch) {
    return TodosApi.createTodo(title).then(json => {
      dispatch(addTodo(json));
      dispatch(toggleAddTodoForm());
    });
  }
}

export const addTodo = todo => ({
  type: types.ADD_TODO,
  todo
});

export const deleteTodo = todoId => {
  return function(dispatch) {
    return TodosApi.deleteTodo(todoId).then(_ => {
      dispatch(fetchAllTodos());
    });
  }
}

export const toggleTodoComplete = (todoId, prevCompleted) => {
  return function(dispatch) {
    const completed = !prevCompleted;
    return TodosApi.updateTodo(todoId, { completed }).then(_ => {
      dispatch(updateTodoCompleted(todoId, completed));
    });
  }
}

export const updateTodoCompleted = (todoId, completed) => ({
  type: types.UPDATE_TODO_COMPLETED,
  todoId,
  completed
});

export const clearCompleted = () => {
  return function(dispatch) {
    return TodosApi.deleteCompletedTodos().then(_ => {
      dispatch(fetchAllTodos());
    });
  }
}
