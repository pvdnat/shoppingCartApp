//this would be the definition of store which will get all the reducers combined as one state and do the job broadcasting
//new state to each subscribed component
//import reducers, create/configures store, import middle ware to make calls, combineReducer, export store
//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({
    userReducer,//userReducer : userReducer //- using short hand
    productReducer,
    cartReducer
})

//create configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(thunk)
)
