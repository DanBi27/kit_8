import React from "react";
import ReactDOM from "react-dom";
import WebPage from "/src/jss/WebPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "/src/jss/reducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById("root")
);

store.subscribe(() => {
  console.log(store.getState());
});
