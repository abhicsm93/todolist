import React from "react";
import DisplayList from "./displayList";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: ""
    };
    this.updateList = this.updateList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateList() {
    this.setState(state => {
      const list = state.list.concat(state.input);
      return {
        list,
        input: ""
      };
    });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <h4>Enter the task:</h4>
          <input type="text" onChange={this.handleChange} /> &nbsp;
          <input
            type="button"
            value="ADD"
            onClick={this.updateList.bind(this)}
          />
          <br />
        </center>
        <ul>
          {this.state.list.map(item => {
            return (
              <DisplayList item={item} id={this.state.list.indexOf(item)} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
