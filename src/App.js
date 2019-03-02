import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./store/store";
import TodoAction from "./store/Actions/actionTodo";
import Progress from "react-page-progress";
import TodoMiddleWare from "./store/Middleware/todoMiddleWare";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    this.props.getTodo();
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    this.setState({
      todos: nextProps.todos
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Progress color="skyblue" height={5} />
        Hello World
        <ul>
          {todos.length &&
            todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.title}
                  <br />
                  <br />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
function mapSateToProps(state) {
  return {
    isLoading: state.Todo.isLoading,
    isError: state.Todo.isError,
    todos: state.Todo.todos
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // getTodo: data => dispatch(TodoAction.getTodo(data))
    getTodo: data => dispatch(TodoMiddleWare.getTodo(data))
  };
}

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(App);

//export default App;

/*



===========> Similar Working ====================


import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./store/store";

function UpdateTodo() {
  return {
    type: "ADD-TODO"
  };
}
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.updateTodo();
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}
// function mapSateToProps(state) {
//   return {
//     Todo: state.Todo.text
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     updateTodo: data => dispatch(UpdateTodo(data))
//   };
// }

// export default connect(
//   mapSateToProps,
//   mapDispatchToProps
// )(App);
export default App;
*/
