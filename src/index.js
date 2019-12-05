import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Components/todo";
import Header from "./Components/header";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Todo />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
