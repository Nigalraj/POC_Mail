import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { SignUpReducer } from "../reducers/SignUpReducer";
import { LoginReducer } from "../reducers/LoginReducer";
import { OrgReducer } from "../reducers/OrgReducer";

const reducer = combineReducers({
    Signupstore: SignUpReducer,
    Loginstore: LoginReducer,
    Orgstore: OrgReducer,
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
