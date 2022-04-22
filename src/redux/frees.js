import * as ActionTypes from './ActionTypes';

export const Frees = (state = {
        isLoading: true,
        errMess: null,
        frees: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FREES:
            return{...state, isLoading: false, errMess: null, frees: action.payload};
        case ActionTypes.FREES_LOADING:
            return{...state, isLoading: true, errMess: null, frees: []};
        case ActionTypes.FREES_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};