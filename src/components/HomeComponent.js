import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardImgOverlay, CardBody } from 'reactstrap';
import { Badge } from 'react-bootstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';



function RenderCategories({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h6>{errMess}</h6>;
    }
    return(
        <Card>
            <CardImg width="40%" src={baseUrl + item.image} alt={item.name} />
            <CardImgOverlay>
                <CardText><h4>{item.name}</h4></CardText>
            </CardImgOverlay>
        </Card>
    )
}

 function RenderEvents({eent, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h6>{errMess}</h6>;
    }
     return(
        <div>
            <Card outline color="dark">
                <img
                    alt="Event"
                    src={baseUrl + eent.image}
                    width="100%"
                />
                <CardBody className="bg-dark text-white">
                    <CardText tag="h5">{eent.description} </CardText>
                    <CardText className="text-white"><Link to='/eventscomp'>View more events</Link></CardText>
                </CardBody>
            </Card>
        </div>
     )
 }

 function RenderDeals({deal, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h6>{errMess}</h6>;
    }
    return (
        <div>
            <Card outline color="dark">
                <img
                    alt="Deal"
                    src={baseUrl + deal.image}
                    width="100%" height="100%"
                />
                <CardImgOverlay >
                    
                    <CardText tag="h1" className="text-white"><Badge pill bg="danger">New</Badge></CardText>
                    <CardText tag="h2" className="text-white"><strong>{deal.name}</strong></CardText>
                    <CardText tag="h2" className="text-white"><strong>{deal.shop}</strong></CardText>
                    <CardText tag="h3" className="text-white"><strong>{deal.offer}  {deal.details}</strong></CardText>
                    <CardText tag="h3" className="text-white"><strong>{deal.date}</strong></CardText>
                </CardImgOverlay>
                
            </Card>
        </div>
    )
       
}

function Home(props) {
   
    return (
        <>
            <div className="container-fluid">
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="mt-5" >Upcoming Events</h2>
                        <hr />
                        <RenderEvents eent={props.eVent} 
                            isLoading={props.eventsLoading}
                            errMess={props.eventsErrMess}
                        />
                    </div>
                </div>
            
                <div className='row justify-content-center'>
                    <div className='col-9 text-center '>
                        <h2 className="mt-5">From Our Local Artists</h2>
                        <hr />  
                    </div>
                </div>
                <div className="row  justify-content-center">
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/paintings">
                        <RenderCategories 
                            item={props.painting} 
                            isLoading={props.paintingsLoading}
                            errMess={props.paintingsErrMess}
                        />
                        </Link>
                    </div>
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/accessories">
                        <RenderCategories item={props.accessory} 
                            isLoading={props.accessoriesLoading}
                            errMess={props.accessoriesErrMess}
                        />
                        </Link>
                    </div>
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/jewellery">
                        <RenderCategories item={props.jewell}
                            isLoading={props.jewelleryLoading}
                            errMess={props.jewelleryErrMess} 
                        /> 
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="mt-5" >Todays Deals</h2>
                        <hr />
                        <RenderDeals  deal={props.deaL}
                            isLoading={props.dealsLoading}
                            errMess={props.dealsErrMess}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;



