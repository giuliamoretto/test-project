import React from "react";
import ReactDOM from "react-dom";
import { getValue, generator, delayGenerator } from "./prova";
import "./styles.css";

function App() {
  const prova = getValue(1, 2).next().value;
  const obj1 = generator();
  const value1 = obj1.next().value;
  const value2 = obj1.next().value;
  const value3 = obj1.next().value;
  const value4 = obj1.next().value;
  const value5 = obj1.next().value;
  const obj2 = delayGenerator();
  obj2.next().value.then(v => {
    console.log("delayGenerator", obj2.next());
  });

  return (
    <div className="App">
      <h1>redux-saga</h1>
      <h2>function generator</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
