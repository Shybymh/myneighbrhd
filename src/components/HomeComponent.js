
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardImgOverlay, CardBody,  CardLink } from 'reactstrap';



function RenderCategories({item}) {
    return(
        <Card>
                <CardImg width="40%" src={item.image} alt={item.name} />
                <CardImgOverlay>
                    <CardText><h4>{item.name}</h4></CardText>
                </CardImgOverlay>
        </Card>
    )
}

 function RenderEvents({eent}) {
     return(
            <div>
                <Card>
                    <img
                        alt="Card cap"
                        src={eent.image}
                        width="100%"
                    />
                    <CardBody className="bg-dark text-white">
                        <CardText tag="h6">{eent.description} </CardText>
                        <CardLink className="bg-dark text-white" href="#"> View more events </CardLink>
                    </CardBody>
                </Card>
            </div>
     )
 }




function Home(props) {
    // const productsplaceholder = props.categories.map(category => {
    //    return (
    //         <div key={category.id} className="col-md-4">
    //             <Link to="/paintings">
    //             <RenderCategories category={category} />
    //             </Link>
    //         </div>
    //     );
    // });

    return (
        <>
        <div className="container-fluid">
            
            <div className="row justify-content-center">
                <div className="col-md-8">
                <h2 className="m-3" >Upcoming Events</h2>
                <hr />
                    <RenderEvents eent={props.eVent} />
                </div>
            </div>
        
            {/* <h2 class="text-center" id="localArtist">Shop local</h2> */}
            <div className='row justify-content-center'>
                <div className='col-9 text-center '>
                <h2 className="m-3">From Our Makers</h2>
                <hr />  
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 col-md-3 mt-1">
                    <Link to="/paintings">
                    <RenderCategories item={props.painting} />
                    </Link>
                </div>
                <div className="col-4 col-md-3 mt-1">
                    <Link to="/accessories">
                    <RenderCategories item={props.accessory} />
                    </Link>
                </div>
                <div className="col-4 col-md-3 mt-1">
                    <Link to="/jewellery">
                    <RenderCategories item={props.jewell} /> 
                    </Link>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default Home;



