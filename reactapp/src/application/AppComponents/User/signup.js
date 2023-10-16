import React,  { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AddUserToDB } from "../../../state/User/UserAction";

let sigup = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        address: "",
      });
    
    let navigate = useNavigate();
    let dispatch = useDispatch();
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUser({
          ...user,
          [name]: value,
        });
      };

    const handleSubmit = (evt) => {
        setUser({
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            address: "",
          });
        dispatch(AddUserToDB(user, navigate));
        evt.preventDefault();
    };

    return(
        <div className="container d-flex justify-content-center">
            
            <form className="form" onSubmit={handleSubmit}>      
             <h1 className="text-center">Sign Up</h1>          
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} name="userName"
                    value={user.userName} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} name="password"
                    value={user.password} onChange={handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    <b>First Name :</b>
                    <input type="text" className={"form-control col-md-12"} name="firstName"
                    value={user.firstName} onChange={handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    <b>Last Name :</b>
                    <input type="text" className={"form-control col-md-12"} name="lastName"
                    value={user.lastName} onChange={handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    <b>Email:</b>
                    <input type="text" className={"form-control col-md-12"} name="email"
                    value={user.email} onChange={handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    <b>Address :</b>
                    <input type="text" className={"form-control col-md-12"} name="address"
                    value={user.address} onChange={handleChange}
                    required/>
                </label>
                <br/>
                    <input type="submit" className={"btn btn-primary"} value="Sign Up" />
                <br/>
            </form>
        </div>
    )
}

export default sigup;