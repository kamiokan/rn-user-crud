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
