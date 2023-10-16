import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../../state/Cart/CartAction";


let ProductItemComponent = ({product})=>{
    let [qty, setQuantity] = useState(1);
    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart({...product, qty}))
    }

    const itemIncreament = () => {
        setQuantity(qty+1);
    }

    const itemDecreament = () => {
        if (qty === 0) {
            setQuantity(0);
        } else {
            setQuantity(qty-1);
        }
    }


    return(
        
            <div className="card">
            <img src={product.image} className="card-img-top rounded" height="300px" alt={product.name}/>
                <div className="card-body">
                    <h1 className="text-body text-center">{product.name}</h1>
                    <h2 className="card-subtitle mb-2 text-muted text-center">{product.description}</h2>
                    <h2 className="card-text">${product.price}</h2>
                    <div className="row justify-content-between">
                        <div className="quantity-input col-md-6">
                            <button onClick={itemDecreament} className="btn btn-secondary">-</button>
                            <input type="text" value={qty} onChange={(evt) => setQuantity(parseInt(evt.target.value))} className="col-md-4" />
                            <button onClick={itemIncreament} className="btn btn-secondary">+</button>
                        </div>
                        <button className="btn btn-primary col-md-6" onClick={()=>{addProductToCart(product)}}>Add to Cart</button>

                    </div>
                        
                </div>
            </div>
        
    )

}

export default ProductItemComponent;