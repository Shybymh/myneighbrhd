import React from "react";

// function RenderEven({evens}) {
//     return (
       
//             <img src={evens.image} alt='event name' width="100%" />
       
//     );
   
// }

function EventsComp(props) {
    const showeven = props.events.map(evens => {
        return ( 
                <div className="row postcard mt-3">
                    <div className="col-6 mt-3 mb-3">
                        <img src={evens.image} alt={evens.name} width="100%"/>
                    </div>
                    <div className="col-6 mt-3 mt-md-5 mb-3">
                        <h2 className="m-md-5">{evens.name}</h2>
                        <h5 className="m-md-5">{evens.time} {evens.date}</h5>
                        <h6 className="m-md-5">{evens.description}</h6>
                    </div>
                </div>
        //     <div>
        //        <article className="postcard light blue">
		// 		<img src={evens.image} alt="Title" width="50%" height='100%' />
			
		// 	<div class="postcard__text t-dark">
		// 		<h1 class="postcard__title blue">{evens.name}</h1>
		// 		<div class="postcard__subtitle small">
		// 			<h5>{evens.time}</h5>
		// 		</div>
		// 		<div class="postcard__bar"></div>
		// 		<div class="postcard__preview-txt">{evens.description}</div>
		// 	</div>
		// </article>
        //     </div>

        )
    })
    return (
        <div className="container">
            
            
                    {showeven}
               
            
        </div>
    );

}

export default EventsComp;