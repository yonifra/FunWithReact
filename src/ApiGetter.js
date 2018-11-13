import React, { Component } from "react";
import axios from "axios";

class ApiRenderer extends Component {
  state = { response: "Empty" };

  render() {
    return <div>{this.state.response}</div>;
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function(r) {
        // handle success
        this.setState({
          response: r
        });
        console.log(r);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

export default ApiRenderer;
