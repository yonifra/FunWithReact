import React, { Component } from "react";

class ClickCounter extends Component {
  state = { times: 0 };
  props = { name: "dodds" };

  render() {
    return (
      <div>
        <div className="root">Clicked {this.state.times} times</div>
        <button
          onClick={() => {
            this.setState({ times: this.state.times + 1 });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default ClickCounter;
