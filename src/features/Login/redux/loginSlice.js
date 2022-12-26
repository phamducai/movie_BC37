import produce from "immer";
import actions from "./type";

// immutable
const initialState = {
  profile: null,
};

// shallow comparison
const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_PROFILE:
        draft.profile = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;

// immutable: tính bất biến (string, number, boolean..)

// var a = 5;

// a = 10;

// var b = 10;
// console.log(a === b);

// var name = "hieu";

// name = "dung";

// // mutable : object

// var obj = { name: "hieu" };
// var obj2 = { ...obj };

// obj2.name = "hoang";

// console.log(obj === obj2); // false
