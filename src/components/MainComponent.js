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
import Renderfree from './FreeComponent';
import Rendersell from './SellComponent';
import { ARTISTS } from '../shared/artists';
import { ACCESSORIES } from '../shared/accessories';
import { JEWELLERY } from '../shared/jewellery';
import { PAINTINGS } from '../shared/paintings';
import { REVIEWS } from '../shared/reviews';
import { EVENTS } from '../shared/events';
import { SERVICES } from '../shared/services';
import { FREES } from '../shared/frees';
import { SELLS } from '../shared/sells';
import { DEALS } from '../shared/deals';





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
        services: SERVICES,
        frees: FREES,
        sells: SELLS,
        deals: DEALS
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
          deaL={this.state.deals.filter(deaL => deaL.featured)[0]}
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

     

    return (
      <div>
        <img src="/assets/images/header 2.jpg" alt="neighborhood" width="100%" height="120" />
        <Header />
        <Switch>
          <Route exact path='/home' component={ProductPlaceholder} />
          <Route exact path='/paintings' render={() => <ShowPaintings paintings={this.state.paintings} />}  />
          <Route exact path='/accessories' render={() => <ShowAccessories accessories={this.state.accessories} />}  />
          <Route exact path='/jewellery' render={() => <ShowJewellery jewellery={this.state.jewellery} />}  />
          <Route exact path='/frees' render={() => <Renderfree frees={this.state.frees} />}  />
          <Route exact path='/sells' render={() => <Rendersell sells={this.state.sells} />} />
          {/* <Route exact path='/artists' render={() => <ShowArtists artists={this.state.artists} />}  /> */}
          <Route exact path='/eventscomp' render={() => <EventsComp events={this.state.events} />}  />
          <Route exact path='/services' render={() => <Renderservices services={this.state.services} />}  />
          <Route exact path='/paintings/:paintingId' component={SelectedProduct} />
          <Route exact path='/accessories/:accessoryId' component={SelectedProduct} />
          <Route exact path='/jewellery/:jewellId' component={SelectedProduct} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default Main;