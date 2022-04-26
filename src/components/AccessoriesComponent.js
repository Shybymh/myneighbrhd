import React from "react";
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderAccessories({accessory}) {
    
    return(
        <Card className="p-2">
            <Link to={`/accessories/${accessory.id}`}>
                <CardImg width="100%" src={baseUrl + accessory.image} alt={accessory.name} />
                <CardBody><h5>{accessory.name}</h5> <h6> {accessory.price}</h6></CardBody>
            </Link>
        </Card>
    )
}


function ShowAccessories(props) {
    const showaccessories = props.accessories.accessories.filter(accessory => accessory.accessorypage).map(accessory => {
       return (
            <div key={accessory.id} className="col-md-5 mt-4">
                <RenderAccessories accessory={accessory} />
            </div>
        );
    });

    if (props.accessories.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.accessories.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>{props.accessories.errMess}</h6>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col mt-3'>
                    
                    <h2>Accessories</h2>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {showaccessories}
            </div>
        </div>
    );
}

export default ShowAccessories;