import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

// 让redux-devtool生效的方法一
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 让redux-devtool生效的方法二
// const composeEnhancers =
//   ((window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
//   compose;

// 让redux-devtool生效的方法三
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
