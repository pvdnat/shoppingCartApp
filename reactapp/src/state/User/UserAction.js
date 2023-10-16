import * as ActionTypes from "../actionTypes";
import axios from "axios";

export const AddUserToStore = (newUser) => {
    return {
        type: ActionTypes.AddUserToStore,
        payload: newUser,
    };
};

export const AddUserToDB = (user, navigate) => {
    return (dispatch) => {
        axios.post("http://localhost:9999/user/signup", user)
            .then((savedUser) => {
                let signdUser = savedUser.data;
                dispatch(AddUserToDB(signdUser));
                navigate("/login");
            })
            .catch((err) => {
                console.log("Sign Up Error: ", err);
            });
    };
};

export const UserLogin = (userName, password, navigate) => {
    return (dispatch) => {
        axios.post("http://localhost:9999/user/login", { userName, password })
            .then((res) => {
                const user = res.data;
                navigate("/home")
                dispatch(AddUserToStore(user));
            })
            .catch((err) => {
                console.log("Login Error: ", err);
            });
    };
};

export const UserLogout = (navigate) => {
    navigate("/");
    return {
        type: ActionTypes.AddUserToStore,
        payload: {
            _id: "",
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            address: "",
        },
    };
};