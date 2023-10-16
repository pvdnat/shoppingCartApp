import React from "react";

const CartSummaryComponent = (props)=>{
    let {
        count,
        amount
    } = props.data;


    return(
        <div className="text-center">
            {props.readOnly ? <h5> Total Summary </h5> : <h2> Total Summary </h2>}
            <h4> Products Count: {count} </h4>
            <h4> Subtotal: {amount} </h4>
        </div>
    )
}

export default CartSummaryComponent;