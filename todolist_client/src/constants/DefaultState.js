import * as filters from './Filters';

export const defaultState = {
  todos: [],
  isCreating: false,
  todoFilter: filters.ALL,
  displayedTodoId: null,
}