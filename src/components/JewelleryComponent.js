import React from "react";
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderJewellery({jewell}) {
    
    return(
        <Card>
            <Link to={`/jewellery/${jewell.id}`}>
                <CardImg width="100%" src={baseUrl + jewell.image} alt={jewell.name} />
                <CardBody><h5>{jewell.name}</h5> <h6> {jewell.price}</h6></CardBody>
            </Link>
        </Card>
    )
}


function ShowJewellery(props) {
    const showjewellery = props.jewellery.jewellery.filter(jewell => jewell.jewellerypage).map(jewell => {
       return (
            <div key={jewell.id} className="col-md-4 mt-3">
                <RenderJewellery jewell={jewell} />
            </div>
        );
    });
    if (props.jewellery.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.jewellery.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>{props.jewellery.errMess}</h6>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col mt-3'>
                    <h2>Jewellery</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {showjewellery}
            </div>
        </div>
    );
}

export default ShowJewellery;