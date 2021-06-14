import { cartActionTypes } from "../constants/ActionTypes";

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case cartActionTypes.SET_CART_QTY:
            return state;
        case cartActionTypes.ADD_TO_CART:
            return state
        default:
            return state;
    }
}