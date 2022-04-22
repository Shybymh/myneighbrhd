import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//paintings

export const fetchPaintings = () => dispatch => {

    dispatch(paintingsLoading());

    return fetch(baseUrl + 'paintings')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(paintings => dispatch(addPaintings(paintings)))
        .catch(error => dispatch(paintingsFailed(error.message)));
};

export const addPaintings = paintings => ({
    type: ActionTypes.ADD_PAINTINGS,
    payload: paintings
}); 

export const paintingsLoading = () => ({
    type: ActionTypes.PAINTINGS_LOADING
});

export const paintingsFailed = errMess => ({
    type: ActionTypes.PAINTINGS_FAILED,
    payload: errMess
});

//Accessories

export const fetchAccessories = () => dispatch => {

    dispatch(accessoriesLoading());

    return fetch(baseUrl + 'accessories')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(accessories => dispatch(addAccessories(accessories)))
        .catch(error => dispatch(accessoriesFailed(error.message)));
};

export const addAccessories = accessories => ({
    type: ActionTypes.ADD_ACCESSORIES,
    payload: accessories
}); 

export const accessoriesLoading = () => ({
    type: ActionTypes.ACCESSORIES_LOADING
});

export const accessoriesFailed = errMess => ({
    type: ActionTypes.ACCESSORIES_FAILED,
    payload: errMess
});

//Jewellery

export const fetchJewellery = () => dispatch => {

    dispatch(jewelleryLoading());

    return fetch(baseUrl + 'jewellery')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(jewellery => dispatch(addJewellery(jewellery)))
        .catch(error => dispatch(jewelleryFailed(error.message)));
};

export const addJewellery = jewellery => ({
    type: ActionTypes.ADD_JEWELLERY,
    payload: jewellery
}); 

export const jewelleryLoading = () => ({
    type: ActionTypes.JEWELLERY_LOADING
});

export const jewelleryFailed = errMess => ({
    type: ActionTypes.JEWELLERY_FAILED,
    payload: errMess
});

//Events

export const fetchEvents = () => dispatch => {

    dispatch(eventsLoading());

    return fetch(baseUrl + 'events')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(events => dispatch(addEvents(events)))
        .catch(error => dispatch(eventsFailed(error.message)));
};

export const addEvents = events => ({
    type: ActionTypes.ADD_EVENTS,
    payload: events
}); 

export const eventsLoading = () => ({
    type: ActionTypes.EVENTS_LOADING
});

export const eventsFailed = errMess => ({
    type: ActionTypes.EVENTS_FAILED,
    payload: errMess
});

//Deals

export const fetchDeals = () => dispatch => {

    dispatch(dealsLoading());

    return fetch(baseUrl + 'deals')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(deals => dispatch(addDeals(deals)))
        .catch(error => dispatch(dealsFailed(error.message)));
};

export const addDeals = deals => ({
    type: ActionTypes.ADD_DEALS,
    payload: deals
}); 

export const dealsLoading = () => ({
    type: ActionTypes.DEALS_LOADING
});

export const dealsFailed = errMess => ({
    type: ActionTypes.DEALS_FAILED,
    payload: errMess
});

//Sells

export const fetchSells = () => dispatch => {

    dispatch(sellsLoading());

    return fetch(baseUrl + 'sells')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(sells => dispatch(addSells(sells)))
        .catch(error => dispatch(sellsFailed(error.message)));
};

export const addSells = sells => ({
    type: ActionTypes.ADD_SELLS,
    payload: sells
}); 

export const sellsLoading = () => ({
    type: ActionTypes.SELLS_LOADING
});

export const sellsFailed = errMess => ({
    type: ActionTypes.SELLS_FAILED,
    payload: errMess
});

//Frees

export const fetchFrees = () => dispatch => {

    dispatch(freesLoading());

    return fetch(baseUrl + 'frees')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(frees => dispatch(addFrees(frees)))
        .catch(error => dispatch(freesFailed(error.message)));
};

export const addFrees = frees => ({
    type: ActionTypes.ADD_FREES,
    payload: frees
}); 

export const freesLoading = () => ({
    type: ActionTypes.FREES_LOADING
});

export const freesFailed = errMess => ({
    type: ActionTypes.FREES_FAILED,
    payload: errMess
});

//Services

export const fetchServices = () => dispatch => {

    dispatch(servicesLoading());

    return fetch(baseUrl + 'services')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(services => dispatch(addServices(services)))
        .catch(error => dispatch(servicesFailed(error.message)));
};

export const addServices = services => ({
    type: ActionTypes.ADD_SERVICES,
    payload: services
}); 

export const servicesLoading = () => ({
    type: ActionTypes.SERVICES_LOADING
});

export const servicesFailed = errMess => ({
    type: ActionTypes.SERVICES_FAILED,
    payload: errMess
});


//Reviews

export const fetchReviews = () => dispatch => {

    dispatch(reviewsLoading());

    return fetch(baseUrl + 'reviews')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
}); 

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});


//Artists

export const fetchArtists = () => dispatch => {

    dispatch(artistsLoading());

    return fetch(baseUrl + 'artists')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(artists => dispatch(addArtists(artists)))
        .catch(error => dispatch(artistsFailed(error.message)));
};

export const addArtists = artists => ({
    type: ActionTypes.ADD_ARTISTS,
    payload: artists
}); 

export const artistsLoading = () => ({
    type: ActionTypes.ARTISTS_LOADING
});

export const artistsFailed = errMess => ({
    type: ActionTypes.ARTISTS_FAILED,
    payload: errMess
});

export const addCarts = carts => ({
    type: ActionTypes.ADD_CART,
    payload: carts
}); 











