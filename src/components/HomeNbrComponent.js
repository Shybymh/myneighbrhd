import React, { Component } from "react";
import { PAINTINGS } from '../shared/paintings';
import { JEWELLERY } from '../shared/jewellery';

//import { Link } from "react-router-dom";
//import { Card, CardImg, CardText, CardImgOverlay } from 'reactstrap';

class HomeNbr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings: PAINTINGS,
            jewellery: JEWELLERY
        }
    }

    render() {
        return (
            <RenderEvents />
        );
    }
}

function RenderEvents(props) {
    return(
        <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: '/assets/images/p1.jpg'
          },
          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src:  '/assets/images/header 2.jpg'
          },
          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src:  '/assets/images/p2.jpg'
          }
        ]}
       />
    )
}



// function Home(props) {
//     const productsplaceholder = props.categories.map(category => {
//        return (
//             <div key={category.id} className="col-md-4">
//                 <Link to="/paintings">
//                 <RenderCategories category={category} />
//                 </Link>
//             </div>
//         );
//     });

//     return (
        
//         <div className="container">
//             <h2 class="text-center" id="localArtist">Support local artists, every small purchase makes a big difference</h2>
//             <div className='row'>
//                 <div className='col text-center '>
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>Directory</BreadcrumbItem> 
//                     </Breadcrumb>
//                     <h2>Categories</h2>
//                     <hr />
//                 </div>
//             </div>
//             <div className="row">
//                 {productsplaceholder}
//                 <div className="col-md m-1">
//                     <Link to="/paintings">
//                     <RenderCategories item={props.painting} />
//                     </Link>
//                 </div>
//                 <div className="col-md m-1">
//                     <Link to="/accessories">
//                     <RenderCategories item={props.accessory} />
//                     </Link>
//                 </div>
//                 <div className="col-md m-1">
//                     <Link to="/jewellery">
//                     <RenderCategories item={props.jewell} /> 
//                     </Link>
//                 </div>
//             </div>
//         </div>
        
//     );
// }

export default HomeNbr;