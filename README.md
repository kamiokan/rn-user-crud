# React Native ＋ Expo + Redux でユーザー情報を登録・参照・編集するだけのスマホアプリを作る

## 手順（１）必要なパッケージをインストールする

- ReactNavigation をインストールする

```
$ npm install @react-navigation/native
$ npm install @react-navigation/stack
$ npm install @react-navigation/bottom-tabs
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- Redux をインストールする

```
$ npm install redux react-redux
```

## 手順(2)ホーム画面、設定画面を作りナビゲーションでつなげる

- navigation
  - AppNavigator.js
- screens
  - HomeScreen.js
  - SettingScreen.js

という構造にして書くと、ページが増えても管理しやすい。

## 手順(3)Redux でデータ保存する部分を実装する

1. App.js に import 文を２つ追記し、`<Provider>`タグで全体を囲う

```
import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux"; // 追記部分
import store from "./store"; // 追記部分

export default function App() {
  return (
    <Provider store={store}> // 追記部分
      <AppNavigator />
    </Provider>              // 追記部分
  );
}
```

2. store/index.js ファイルを作り記述する

```
// store/index.js
import { createStore } from "redux";

import reducers from "../reducers";

const store = createStore(
  // storeを作成
  reducers, // Reducerを適用
  {}
);

export default store;
```

3. Action creator を呼ぶ

```
// screens/SettingScreen.js

import * as actions from '../actions'; // ←追記部分

class SettingScreen extends React.Component {
  componentDidMount() {                // ←追記部分
    this.props.fetchUserRecord(); // Action creatorを呼ぶ
  }

  render() {
      // ゴニョゴニョ
  }
}

// ゴニョゴニョ
```

4. action/index.js, action/user_action.js ファイルを作り記述する

```
// action/index.js
export * from "./user_action";
```

```
// action/user_action.js
const FETCH_USER_RECORD = "fetch_user_record";

// Action creatorを作成
export const fetchUserRecord = () => {
  // Reducerに渡す`type`と`payload`を指定
  return { type: FETCH_USER_RECORD, payload: userRecordTmp };
};

const userRecordTmp = {
  name: "上岡",
  hobby: "釣り",
};
```

5. reducer を作る

- reducers/index.js ファイルを作り記述する

```
// reducers/index.js
import { combineReducers } from "redux";

import UserReducer from "./user_reducer";

export default combineReducers({
  // ここで複数のReducerをひとまとめにする
  user: UserReducer,
});
```

- reducers/user_reducer.js ファイルを作り記述する

```
// reducers/user_reducer.js
const FETCH_USER_RECORD = "fetch_user_record";

const INITIAL_STATE = {
  // 初期データ
  userRecord: { name: "No Name", hobby: "No Hobby" },
};

export default (state = INITIAL_STATE, action) => {
  // `state`と`action`を受け取り、
  switch (
    action.type // もし`action`の`type`が
  ) {
    case FETCH_USER_RECORD: // `FETCH_USER_RECORD`だったら、
      return { ...state, userRecord: action.payload }; // `state`の`userRecord`項目を上書きして返す

    default:
      // それ以外だったら、
      return state; // `state`を何もいじらずそのまま返す
  }
};

```

6. Action creator と Reducer を connect でつなげる

```
// screens/SettingScreen.js
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { connect } from "react-redux"; // 追記
import * as actions from "../actions"; // 追記

class SettingScreen extends React.Component {
  // ゴニョゴニョ
}

const styles = StyleSheet.create({
  // ゴニョゴニョ
});

const mapStateToProps = (state) => {
  return {
    // `state.user.fetchUserRecord`を → `this.props.fetchUserRecord`にコピー
    fetchUserRecord: state.user.fetchUserRecord,
  };
};

export default connect(mapStateToProps, actions)(SettingScreen);

```
