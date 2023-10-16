import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "../CheckOut/CheckOutTotal";
import { saveCartToDb } from "../../../state/Cart/CartAction";

let CartComponent = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer)//reading cart data from store


    return(
        <div className="container">
            <h1>Cart Component</h1>

            {
                cartList && cartList.length >= 1 ? 
                <>
                    <table className="table">
                        <thead className="table-success">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : //bydefault false as boolean default is false
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                    //return item.name
                                    return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id}/>
                                })
                            } 
                        </tbody>
                    </table>

                    
                </>
                : 
                <h2>Please add product to cart</h2>
            }

        </div>
    )
}

export default CartComponent;
