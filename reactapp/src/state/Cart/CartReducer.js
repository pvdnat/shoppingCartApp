import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = [] //instead of objet in array we are directly putting array

export default function CartReducer(state = INITIAL_STATE, action) 
{
    console.log("cart Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem

    switch(action.type) 
    {
        case ActionTypes.ADD_ITEM:
            //checking for duplicate item with _id state=>list of products (cart list)
            let newState = state.filter(item => item._id != action.payload.item._id);
            return [...newState, action.payload.item];//creating a new state with new item
        
         //to select all the items except the one which we click to remove
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id)        
        
        //update quantity of an item in cart
        case ActionTypes.UPDATE_ITEM:
            return state.map((item)=>{
                if (item._id == action.payload.id) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })

        //empty cart
        case ActionTypes.EMPTY_CART:
            return [];
        
        default:
            return state;
    }
}