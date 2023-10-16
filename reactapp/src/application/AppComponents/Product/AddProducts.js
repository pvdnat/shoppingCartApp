import React,  { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveProduct } from "../../../state/Product/ProductAction";

let AddProducts = (props)=>{


    const [product, setProduct] = useState({
        name : "",
        price : "",
        description : "",
        rating : "",
        category : "",
        image : ""
    });
    
    let dispatch = useDispatch();
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setProduct({
          ...product,
          [name]: value,
        });
      };

    const handleSubmit = (evt) => {
        setProduct({
            name : "",
            price : "",
            description : "",
            rating : 0,
            category : "",
            image : ""
          });
        dispatch(saveProduct(product));
        evt.preventDefault();
    };

return(
    <div className="container">
        <h1 className="text-center">Saving Product</h1>
        <div className="container d-flex ">
            <form className={"form col-md-10 justify-content-center"} onSubmit={handleSubmit}>                
                <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12"} name="name" value={product.name} 
                    onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                        <b>Price :</b>
                        <input type="text" className={"form-control col-md-12"} name="price" value={product.price} 
                    onChange={handleChange} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Description :</b>
                        <input type="text" className={"form-control col-md-12"} name="description" value={product.description} 
                    onChange={handleChange} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Category: </b>
                        <input type="text" className={"form-control col-md-12"} name="category" value={product.category} 
                    onChange={handleChange} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Image URL: </b>
                        <input type="text" className={"form-control col-md-12"} name="image" value={product.image} 
                    onChange={handleChange} required/>
                    </label>
                <br/>
                    <input type="submit" className={"btn btn-primary"} value="Save Product" />

                <br/>
            </form>
        </div>
    </div>
)
    
}

export default AddProducts;
