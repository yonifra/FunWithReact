import React from "react";
import ReactDOM from "react-dom";
import { ClickCounter } from "./ClickCounter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClickCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ClickCounter />, rootElement);
