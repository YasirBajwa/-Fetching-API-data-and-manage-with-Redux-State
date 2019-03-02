import TodoAction from "../Actions/actionTodo";

function User(state = { name: "Ahmad" }, action) {
  switch (action.type) {
    case TodoAction.GET_TODO:
      return {
        ...state,
        text: "USER is Added"
      };
    case "DELETE-USER":
      return {
        ...state,
        text: "USER is Deleted"
      };
    default:
      return state;
      break;
  }
}
export default User;
