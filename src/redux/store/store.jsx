import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { GetAllusersReducer } from "../reducers/GetAlluserReducer";

const reducer = combineReducers({
    Getusers:GetAllusersReducer
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
