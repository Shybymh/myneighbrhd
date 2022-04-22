import React from "react";
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';





function RenderPaintings({painting}) {
   
    return(
        <Card>
            <Link to={`/paintings/${painting.id}`}>
                <CardImg width="100%" src={baseUrl + painting.image} alt={painting.name} />
                <CardBody><h5>{painting.name}</h5> <h6> {painting.price}</h6></CardBody>
            </Link>
        </Card>
    )
}



function ShowPaintings(props) {
    const showpaintings = props.paintings.paintings.filter(painting => painting.paintingpage).map(painting => {
       return (
            <div key={painting.id} className="col-md-5 m-1">
                <RenderPaintings painting={painting} />
            </div>
        );
    });
    if (props.paintings.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.paintings.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>{props.paintings.errMess}</h6>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col mt-3'>
                    <h2>Paintings</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {showpaintings}
            </div>
            
        </div>
    );
}

export default ShowPaintings;