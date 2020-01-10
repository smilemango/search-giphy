import React from "react";
import Search from "./components/search";
import store from "./store/createStore";
import { Provider } from "react-redux";
import Results from "./components/results";

function App() {
  return (
    <Provider store={store}>
      <Search />
      <Results />
    </Provider>
  );
}

export default App;
