import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

let Header = (props)=>{
    const user = useSelector((store) => store.userReducer.User);
    let navigate = useNavigate();
    let dispatch = useDispatch();


    return(
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="button" activeclassname="success" ><button className="btn btn-danger">Home </button></NavLink>
                        </li>
                    </ul>

                    <form className="d-flex">
                        <div className="nav-item">
                        { user.userName == "admin" ?
                            <NavLink to="/saveProducts" className="button" activeclassname="success" ><button className="btn btn-primary">Save Products </button></NavLink>
                            : <></>    
                        }
                        </div>

                        <div className="nav-item">
                            <NavLink to="/cart" className="button" activeclassname="success" ><button className="btn btn-primary">Cart</button></NavLink>
                        </div>
                        <div className="nav-item">
                            { user._id == "" ?
                                < NavLink to="/login" className="button" activeclassname="success" > <button className="btn btn-primary">Login</button> </NavLink> 
                                : <button className="btn btn-primary"  onClick={() => dispatch(UserLogout(navigate))} >Log out </button>
                            }
                        </div>
                    </form>
                </div>
                </nav>
        </>
    )
}

export default Header
