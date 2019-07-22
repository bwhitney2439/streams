import React from "react";
import ReactDOM from "react-dom";
import { provider, connect } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";

const store = createStore(reducers);

ReactDOM.render(
  <Providor store={store}>
    <App />
  </Providor>,
  document.querySelector("#root")
);
