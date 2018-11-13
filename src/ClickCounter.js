import React, { Component } from "react";

export class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
  }

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
