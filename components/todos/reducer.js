export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          completed: false,
        }
      ];

    case 'edit':
      return state.map((item) => {
        if (item.id !== action.id) return item;

        return {
          ...item,
          value: action.value
        };
      });

    case 'remove':
      return state.filter(item => item.id !== action.id);

    case 'toggleCompleted':
      return state.map((item) => {
        if (item.id !== action.id) return item;

        return {
          ...item,
          completed: action.completed
        };
      });

    case 'clearCompleted':
      return state.filter(item => !item.completed);

    case 'toggleAll':
      return state.map((item) => {
        return {
          ...item,
          completed: action.completed
        };
      });

    default:
      throw new Error();
  }
};

export default reducer;
