import * as actionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
export const saveProduct = (product)=>{
    console.log("Product ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        //window.fetch - is reacts way to make ajax to server
        window.fetch("http://localhost:9999/product/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const addProduct = (products)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TOSTORE,
        payload : {products}
    }
}

export const fetchProducts = ()=>{
    console.log("Product ");

    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9999/product/api/getproducts",{
            method: 'GET' //rest method type             
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("get products response ", productresp);
            //dispatch(loading(false));
            dispatch(addProduct(productresp))
            
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};
