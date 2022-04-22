import * as ActionTypes from './ActionTypes';

export const Jewellery = (state = {
        isLoading: true,
        errMess: null,
        jewellery: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_JEWELLERY:
            return{...state, isLoading: false, errMess: null, jewellery: action.payload};
        case ActionTypes.JEWELLERY_LOADING:
            return{...state, isLoading: true, errMess: null, jewellery: []};
        case ActionTypes.JEWELLERY_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};