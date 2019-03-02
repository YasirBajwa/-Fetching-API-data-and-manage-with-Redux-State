import TodoAction from "../Actions/actionTodo";

class TodoMiddleWare {
  static getTodo(data) {
    return dispatch => {
      dispatch(TodoAction.getTodo());

      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(
            TodoAction.getTodoSuccessFul({
              todos: json
            })
          );
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
}
export default TodoMiddleWare;

//calling getTodo function within a TodoAction from getTodo function
