//This file defines all the action types to be used in various actions and reducers

//User
export const AddUserToStore = "USER.ADDUSERTOSTORE";
export const AddUserToDB = "USER.ADDUSERTODB";
export const UserLogin = "USER.LOGIN";
export const UserLogout = "USER.LOGOUT";

//Product Action Types
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";