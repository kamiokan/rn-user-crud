import { combineReducers } from "redux";

import UserReducer from "./user_reducer";

export default combineReducers({
  // ここで複数のReducerをひとまとめにする
  user: UserReducer,
});
