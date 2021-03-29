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
