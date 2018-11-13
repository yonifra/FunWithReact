import React from "react";
import ReactDOM from "react-dom";
import ClickCounter from "./ClickCounter";
import ApiGetter from "./ApiGetter";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <ApiGetter />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
