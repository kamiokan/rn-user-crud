import { createStore } from "redux";

import reducers from "../reducers";

const store = createStore(
  // storeを作成
  reducers, // Reducerを適用
  {}
);

export default store;
