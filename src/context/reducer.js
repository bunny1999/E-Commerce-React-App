import {ADD_PRODUCT,REMOVE_PRODUCT,EMPTY_CART} from './actions.types'
import addCart from '../helper/addCart'
import removeCart from '../helper/removeCart'

export const ProductReducer = (items,action)=>{
    return action.payload
}

export const CartReducer = (items,action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return addCart(items,action.payload);
        case REMOVE_PRODUCT:
            return removeCart(items,action.payload);
        case EMPTY_CART:
            return [];
        default:
            return items;       
    }
}
