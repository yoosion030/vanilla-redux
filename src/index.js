import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = legacy_createStore(countModifier);

countStore.dispatch({ type: "ADD" }); //1
countStore.dispatch({ type: "ADD" }); //2
countStore.dispatch({ type: "ADD" }); //3
countStore.dispatch({ type: "ADD" }); //4
countStore.dispatch({ type: "ADD" }); //5
countStore.dispatch({ type: "ADD" }); //6
countStore.dispatch({ type: "MINUS" }); //5

console.log(countStore.getState());
