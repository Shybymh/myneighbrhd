import React from 'react';


// Function for Footer which returns the other component links, social links and contact info   

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row"> 
                   <div className="col-12"> 
                    <p class="pt-2">We are a group of artists based in Chicago. This site was created for the local artists as an accessible venue to display their handmade, 
                     unique creations and customers can purchase locally crafted items. Items can be customized by connecting with the artist through the site.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    </div>
                    <div className="col-sm-6 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;