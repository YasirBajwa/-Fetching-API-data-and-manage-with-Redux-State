import TodoAction from "../Actions/actionTodo";

function Todo(
  state = {
    isLoading: false,
    isError: false,
    messageSuccess: "",
    messageError: "",
    todos: []
  },
  action
) {
  switch (action.type) {
    case TodoAction.GET_TODO:
      return {
        ...state,
        isLoading: true
      };
    case TodoAction.GET_TODO_SUCCESSFULL:
      return {
        ...state,
        isLoading: false,
        todos: action.data,
        isError: false
      };
    case TodoAction.GET_TODOD_FAILED:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
}
export default Todo;
