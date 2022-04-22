import React from "react";
import { baseUrl } from '../shared/baseUrl';


//import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
//import { Media } from 'reactstrap';






function ShowArtists(props) {
    const showartists = props.artists.artists.map(artist => {
       return (
            <div key={artist.id} className="row postcard mt-3 ">
                <div className="col-sm-6  mt-3 mb-3">
                   <img src={baseUrl + artist.image} width="70%" alt="artist"/>
                </div>
                <div className="col-sm-6 text-align-center mt-3 ">
                  <h5> <strong> {artist.name} </strong> </h5>
                    <i class="fa fa-star" />{' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/>
                    <p>{artist.sales} sales</p>
                  
                  <h6 className="mt-3"> {artist.description} </h6>
                  <i class="fa fa-envelope fa-lg text-primary"/> Contact
                </div>
            </div>
        );
    })

    return (
        <div className="container">
            <div className='row'>
                <div className="col-4">
                    <h2 className="mt-3">Our Artists</h2>
                   
                </div>
                <hr />
            </div>
           
                {showartists}
           
        </div>
    );
}

export default ShowArtists;



 