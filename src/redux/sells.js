import * as ActionTypes from './ActionTypes';

export const Sells = (state = {
        isLoading: true,
        errMess: null,
        sells: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SELLS:
            return{...state, isLoading: false, errMess: null, sells: action.payload};
        case ActionTypes.SELLS_LOADING:
            return{...state, isLoading: true, errMess: null, sells: []};
        case ActionTypes.SELLS_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};