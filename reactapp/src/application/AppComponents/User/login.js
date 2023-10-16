import React,  { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { UserLogin } from "../../../state/User/UserAction";

let login = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    let dispatch = useDispatch();
    
    const handleSubmit = (evt) => {
        dispatch(UserLogin(username, password, navigate));
        evt.preventDefault();
    };

    return(
        <div className="container d-flex justify-content-center">
            
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="text-center">Login</h1>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} name="username"
                    value={username} onChange={(evt)=>{setUserName(evt.target.value)}} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} name="password"
                    value={password} onChange={(evt)=>{setPassword(evt.target.value)}}
                    required/>
                </label>
                <br/>
                    <button type="submit" className="btn btn-primary me-2">Login</button>
                    <NavLink to="/signup" className="button" activeclassname="success" ><button className={"btn btn-primary"}>Sign Up </button></NavLink>
                <br/>
            </form>
        </div>
    )
}

export default login;