const FETCH_USER_RECORD = "fetch_user_record";

// Action creatorを作成
export const fetchUserRecord = () => {
  // Reducerに渡す`type`と`payload`を指定
  return { type: FETCH_USER_RECORD, payload: userRecordTmp };
};

// 引数 name をとり、 {type: "ADD_NAME", name: name} を返すjsの関数
export const setName = (name) => ({
  type: "ADD_NAME",
  name: name,
});

const userRecordTmp = {
  name: "上岡",
  hobby: "釣り",
};
