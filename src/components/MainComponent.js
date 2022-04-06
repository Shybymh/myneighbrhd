import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import ProductDisplay from './ProductDisplayComponent';
import ShowPaintings from './PaintingsComponent';
import ShowAccessories from './AccessoriesComponent';
import ShowJewellery from './JewelleryComponent';
import CheckoutPage from './CheckoutComponent';
import EventsComp from './EventsComponent';
import Renderservices from './ServicesComponent';
import { ARTISTS } from '../shared/artists';
import { ACCESSORIES } from '../shared/accessories';
import { JEWELLERY } from '../shared/jewellery';
import { PAINTINGS } from '../shared/paintings';
import { REVIEWS } from '../shared/reviews';
import { EVENTS } from '../shared/events';
import { SERVICES } from '../shared/services';



// Main component working as container component, passing props to other presentational components and defining routes

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        artists: ARTISTS,
        accessories: ACCESSORIES,
        jewellery: JEWELLERY,
        paintings: PAINTINGS,
        reviews: REVIEWS,
        events: EVENTS,
        services: SERVICES
    };
  }

  
  render() {
    const ProductPlaceholder = () => {
      return (
        <Home 
          painting={this.state.paintings.filter(painting => painting.featured)[0]}
          accessory={this.state.accessories.filter(accessory => accessory.featured)[0]}
          jewell={this.state.jewellery.filter(jewell => jewell.featured)[0]}
          eVent={this.state.events.filter(eVent => eVent.featured)[0]}
        />
      );
    }
     
    const SelectedProduct = ({match}) => {
      return (
        <ProductDisplay 
          painting={this.state.paintings.filter(painting => painting.id === +match.params.paintingId)[0]}
          accessory={this.state.accessories.filter(accessory => accessory.id === +match.params.accessoryId)[0]}
          jewell={this.state.jewellery.filter(jewell => jewell.id === +match.params.jewellId)[0]}
          previews={this.state.reviews.filter(review => review.paintingId === +match.params.paintingId)}
          areviews={this.state.reviews.filter(review => review.accessoryId === +match.params.accessoryId)}
          jreviews={this.state.reviews.filter(review => review.jewellId === +match.params.jewellId)}
        />
      );
    };

    // const CampsiteWithId = ({match}) => {
    //   return (
    //     <CampsiteInfo 
    //       campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
    //       comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
    //     />
    //   );
    // };   

    return (
      <div>
        <img src="/assets/images/header 2.jpg" alt="neighborhood" width="100%" height="120" />
        <Header />
        <Switch>
          <Route exact path='/home' component={ProductPlaceholder} />
          <Route exact path='/paintings' render={() => <ShowPaintings paintings={this.state.paintings} />}  />
          <Route exact path='/accessories' render={() => <ShowAccessories accessories={this.state.accessories} />}  />
          <Route exact path='/jewellery' render={() => <ShowJewellery jewellery={this.state.jewellery} />}  />
          {/* <Route exact path='/artists' render={() => <ShowArtists artists={this.state.artists} />}  /> */}
          <Route exact path='/eventscomp' render={() => <EventsComp events={this.state.events} />}  />
          <Route exact path='/services' render={() => <Renderservices services={this.state.services} />}  />
          <Route exact path='/paintings/:paintingId' component={SelectedProduct} />
          <Route exact path='/accessories/:accessoryId' component={SelectedProduct} />
          <Route exact path='/jewellery/:jewellId' component={SelectedProduct} />
          <Route exact path='/checkout' component={CheckoutPage} />

          {/* <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} /> */}
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default Main;