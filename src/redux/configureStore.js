import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Paintings } from './paintings';
import { Accessories } from './accessories';
import { Jewellery } from './jewellery';
import { Deals } from './deals';
import { Events } from './events';
import { Frees } from './frees';
import { Sells } from './sells';
import { Services } from './services';
import { Reviews } from './reviews';
import { Artists } from "./artists";
import { Carts } from './cart';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            paintings: Paintings,
            accessories: Accessories,
            jewellery: Jewellery,
            deals: Deals,
            events: Events,
            frees: Frees,
            sells: Sells,
            services: Services,
            reviews: Reviews,
            artists: Artists,
            cart: Carts,
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
};