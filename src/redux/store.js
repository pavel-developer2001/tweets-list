import { createStore } from "redux";
import addReducer from "./reducers/addReducer";

const store = createStore(
  addReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
