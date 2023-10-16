import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "../Cart/CartSummary";
import CartComponent from "./CartComponent";
import { saveCartToDb } from "../../../state/Cart/CartAction";

let Cart = (props) => {
    let cartList = useSelector((state)=>state.cartReducer)//reading cart data from store
    let user = useSelector((state)=>state.userReducer.User)

    let dispatchToSaveCart = useDispatch()
    let navigate = useNavigate();

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;

        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }

        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!!!")
        }else{
            dispatchToSaveCart(saveCartToDb(cart, userId))
            navigate('/checkout');
        }
    }

    return (
        <div className="container">  
        {
            cartList && cartList.length >= 1 ? 
            <> 
            <CartComponent />
            <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />
            {
                props.readOnly ? <></> : 
                <Fragment>
                    <div className="text-center">
                        <button className="btn btn-info" onClick={() => clickToSaveCart(cartList, user._id)} >
                                Check Out
                        </button>
                    </div>
                </Fragment> 
            } 
            </>
            :
            <h2>Please add product to cart</h2>
        }
        </div>
    );
};

export default Cart;