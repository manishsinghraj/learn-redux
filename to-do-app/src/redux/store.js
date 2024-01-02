import { todoReducers } from "./todo/reducers";
import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(todoReducers, composeWithDevTools());

export default store;
