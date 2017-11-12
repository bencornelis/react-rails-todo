import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOAD_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      });
    case types.TOGGLE_FORM:
      return Object.assign({}, state, {
        isCreating: !state.isCreating
      });
    case types.ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.todo
        ]
      });
    case types.UPDATE_TODO_COMPLETED:
      const todos = state.todos.slice();
      const todo = state.todos.find(todo => todo.id === action.todoId);
      todo.completed = action.completed;

      return Object.assign({}, state, { todos });
    case types.UPDATE_FILTER:
      return Object.assign({}, state, {
        todoFilter: action.todoFilter
      });
    default:
      return state;
  }
}