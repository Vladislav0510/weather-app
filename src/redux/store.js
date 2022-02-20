import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import mainReducer from "./mainReducer";


const reducers = combineReducers({
    main: mainReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store