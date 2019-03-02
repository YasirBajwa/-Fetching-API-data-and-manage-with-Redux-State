class TodoAction {
  static GET_TODO = "GET_TODO";
  static GET_TODO_SUCCESSFULL = "GET_TODO_SUCCESSFULL";
  static GET_TODOD_FAILED = "GET_TODO_FAILED";

  static getTodo(data) {
    return {
      type: this.GET_TODO
    };
  }
  static getTodoSuccessFul(data) {
    return {
      type: this.GET_TODO_SUCCESSFULL,
      data: data.todos
    };
  }
  static getTodoFailed(data) {
    return {
      type: this.GET_TODOD_FAILED,
      data
    };
  }
}
export default TodoAction;
