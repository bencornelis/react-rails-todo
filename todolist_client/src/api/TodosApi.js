const API_URL = 'http://localhost:3001';

class TodosApi {
  static getTodos() {
    return fetch(`${API_URL}/todos`).then(response => response.json());
  }

  static filterTodos(completed) {
    return fetch(`${API_URL}/todos?completed=${completed}`).then(response => response.json());
  }

  static createTodo(title) {
    const request = new Request(`${API_URL}/todos`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        todo: { title }
      })
    });

    return fetch(request).then(response => response.json());
  }

  static deleteTodo(id) {
    const request = new Request(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        todo: { id }
      })
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response
    });
  }

  static updateTodo(id, params) {
    const request = new Request(`${API_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        todo: params
      })
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response
    });
  }

  static deleteCompletedTodos() {
    const request = new Request(`${API_URL}/todos/clear_completed`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response
    });
  }
}

export default TodosApi;