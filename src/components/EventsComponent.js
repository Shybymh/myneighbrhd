import React from "react";
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';



function EventsComp(props) {
    const showeven = props.events.events.map(evens => {
        return ( 
                
            <div className="row postcard mt-3">
                <div className="col-6 mt-3 mb-3">
                    <img src={baseUrl + evens.image} alt={evens.name} width="100%"/>
                </div>
                <div className="col-6 mt-3 mt-md-5 mb-3">
                    <h2 className="m-lg-5">{evens.name}</h2>
                    <h5 className="m-lg-5">{evens.venue}</h5>
                    <h5 className="m-lg-5">{evens.time}, {evens.date}</h5>
                    <h6 className="m-lg-5">{evens.description}</h6>
                </div>
            </div>
        );
    });

    if (props.events.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.events.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>{props.events.errMess}</h6>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <h2 className="m-3" >Upcoming Events</h2>
            <hr />
            {showeven}
        </div>
    );

}

export default EventsComp;