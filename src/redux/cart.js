import * as ActionTypes from './ActionTypes';

export const Carts = ( state = {carts: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CART:
            const cart = action.payload;
            cart.id = state.carts.length
            return{...state, carts: state.carts.concat(cart)};
           
            default:
                return state;
    }
};