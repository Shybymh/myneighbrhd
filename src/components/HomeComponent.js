import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardImgOverlay } from 'reactstrap';



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

// Renders Breadcrumb, heading and campsites' images and names 

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
        
        <div className="container">
            <h2 class="text-center" id="localArtist">Support local artists, every small purchase makes a big difference</h2>
            <div className='row'>
                <div className='col text-center '>
                    {/* <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem> 
                    </Breadcrumb> */}
                    <h2>Categories</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {/* {productsplaceholder} */}
                <div className="col-md m-1">
                    <Link to="/paintings">
                    <RenderCategories item={props.painting} />
                    </Link>
                </div>
                <div className="col-md m-1">
                    <Link to="/accessories">
                    <RenderCategories item={props.accessory} />
                    </Link>
                </div>
                <div className="col-md m-1">
                    <Link to="/jewellery">
                    <RenderCategories item={props.jewell} /> 
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Home;



