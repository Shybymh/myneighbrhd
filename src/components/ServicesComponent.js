import React from "react";
import { Card, CardBody, CardTitle,  CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';


function Renderservices(props) {
    const servicecomp = props.services.services.map(service => {
        return(
            <div className="col-md-6 mt-4">
        <Card outline color="info">
            <CardBody>
            <CardTitle>{service.name}</CardTitle>
            <hr />
            <CardText>{service.contact1}</CardText>
            <CardText>{service.contact2}</CardText>
            <CardText>{service.contact3}</CardText>
            </CardBody>
        </Card>
        </div>
        );
    });

    if (props.services.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.services.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>{props.services.errMess}</h6>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
            <h2 className="m-3" >Services</h2>
            <hr />
                {servicecomp}
            </div>
        </div>
    )
}




export default Renderservices;
