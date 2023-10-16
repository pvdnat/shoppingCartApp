import * as ActionTypes from "../actionTypes";

const Initial_State = {
    User: {
        _id: "",
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      },
};

let UserReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ActionTypes.AddUserToStore:
            return { ...state, User: action.payload };
        case ActionTypes.UserLogout:
            return { ...state, User: action.payload };
        default:
            return state;
    };
};

export default UserReducer;