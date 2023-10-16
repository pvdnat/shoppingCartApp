import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../state/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";

let DisplayProduct = (props)=>{

    let products = useSelector((state)=>state.productReducer.products);
    let dispatchToFetchProducts = useDispatch();

    useEffect(()=>{
        products && products.length == 0 ? dispatchToFetchProducts(fetchProducts()) : ""
    },
    [])

    return(
        <div className="container">
            <h2 className="heading">Products  List </h2><br></br>
            <div className="row">
            {products.map((product) => {
                return (
                    <div className="col-md-4 my-2" key={product._id}>
                        <ProductItemComponent product={product} />
                    </div>
                );
            })}
        </div>
        </div>
    )
}

export default DisplayProduct;