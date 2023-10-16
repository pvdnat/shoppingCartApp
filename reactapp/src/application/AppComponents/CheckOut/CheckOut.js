import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../../state/Cart/CartAction"
import CartComponent from "../Cart/CartComponent";
import CheckOutTotal from "./CheckOutTotal";

let CheckOut = (props) => {
    const user = useSelector((state) => state.userReducer.User);
    const cart = useSelector((state) => state.cartReducer);
    const [paid, setPaid] = useState(false);


    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;

        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }

        return {
            amount,
            count
        }
    }

    let makePayment = () => {
        setPaid(true)
        setTimeout(() => {
            setPaid(false);
        }, 5000);
    }

    return (
        <div className="container">
            <div className="form">
                <div className="row">
                    <h1>Check Out Page</h1>
                </div>
                {
                    paid ? 
                    <>
                        <h2>Successfully Pay</h2>
                    </>
                    :
                    <>
                        <div className="row">
                            <h2>User Info</h2>
                            
                        </div>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address}</p>

                        <div className="row">
                            <CartComponent />
                            <CheckOutTotal data={recalculate(cart)} readOnly={props.readOnly}/>
                        </div>

                        <div className="container text-center">
                            <button className="btn btn-success" onClick={makePayment}>Make Payment</button>
                        </div>
                    </>
                }
                </div>
                
           
            
            
        </div>
    );
};

export default CheckOut;