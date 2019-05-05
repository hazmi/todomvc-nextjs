export const reducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            value: action.value,
            completed: false,
          }
        ]
      });

    case 'edit':
      return Object.assign({}, state, {
        todos: state.todos.map((item) => {
          if (item.id !== action.id) return item;

          return {
            ...item,
            value: action.value
          };
        })
      });

    case 'remove':
      return Object.assign({}, state, {
        todos: state.todos.filter(item => item.id !== action.id)
      });

    case 'toggleCompleted':
      return Object.assign({}, state, {
        todos: state.todos.map((item) => {
          if (item.id !== action.id) return item;

          return {
            ...item,
            completed: action.completed
          };
        })
      });

    case 'clearCompleted':
      return Object.assign({}, state, {
        todos: state.todos.filter(item => !item.completed)
      });

    case 'toggleAll':
      return Object.assign({}, state, {
        todos: state.todos.map((item) => {
          return {
            ...item,
            completed: action.completed
          };
        })
      });

    default:
      return state;
  }
};

export default reducer;
