import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/C-Pages/Recommend/store";
import { reducer as playerReducer } from "../pages/Player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default cReducer;
