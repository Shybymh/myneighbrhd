import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import ProductDisplay from './ProductDisplayComponent';
import ShowPaintings from './PaintingsComponent';
import ShowAccessories from './AccessoriesComponent';
import ShowJewellery from './JewelleryComponent';
import ShowArtists from './ArtistsComponent';
import CheckoutPage from './CheckoutComponent';
import EventsComp from './EventsComponent';
import Renderservices from './ServicesComponent';
import Renderfree from './FreeComponent';
import Rendersell from './SellComponent';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchPaintings, fetchAccessories, 
      fetchDeals, fetchEvents, fetchFrees, 
      fetchJewellery, fetchReviews, fetchSells, 
      fetchServices, fetchArtists } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    paintings: state.paintings,
    accessories: state.accessories,
    deals: state.deals,
    events: state.events,
    frees: state.frees,
    jewellery: state.jewellery,
    reviews: state.reviews,
    sells: state.sells,
    services: state.services,
    artists: state.artists
  }
}


const mapDispatchToProps = {
  fetchAccessories: () => (fetchAccessories()),
  fetchDeals: () => (fetchDeals()),
  fetchEvents: () => (fetchEvents()),
  fetchFrees: () => (fetchFrees()),
  fetchJewellery: () => (fetchJewellery()),
  fetchPaintings: () => (fetchPaintings()),
  fetchReviews: () => (fetchReviews()),
  fetchSells: () => (fetchSells()),
  fetchServices: () => (fetchServices()),
  fetchArtists: () => (fetchArtists()),
  resetCheckoutForm: () => (actions.reset('checkoutForm'))
};



class Main extends Component {

  componentDidMount() {
    this.props.fetchAccessories();
    this.props.fetchDeals();
    this.props.fetchEvents();
    this.props.fetchFrees();
    this.props.fetchJewellery();
    this.props.fetchPaintings();
    this.props.fetchReviews();
    this.props.fetchSells();
    this.props.fetchServices();
    this.props.fetchArtists();
  }

 

  
  render() {
    const ProductPlaceholder = () => {
      return (
        <Home 
          painting={this.props.paintings.paintings.filter(painting => painting.featured)[0]}
          paintingsLoading={this.props.paintings.isLoading}
          paintingsErrMess={this.props.paintings.errMess}
          accessory={this.props.accessories.accessories.filter(accessory => accessory.featured)[0]}
          accessoriesLoading={this.props.accessories.isLoading}
          accessoriesErrMess={this.props.accessories.errMess}
          jewell={this.props.jewellery.jewellery.filter(jewell => jewell.featured)[0]}
          jewelleryLoading={this.props.jewellery.isLoading}
          jewelleryErrMess={this.props.jewellery.errMess}
          eVent={this.props.events.events.filter(eVent => eVent.featured)[0]}
          eventsLoading={this.props.events.isLoading}
          eventsErrMess={this.props.events.errMess}
          deaL={this.props.deals.deals.filter(deaL => deaL.featured)[0]}
          dealsLoading={this.props.deals.isLoading}
          dealsErrMess={this.props.deals.errMess}
        />
      );
    }
     
    const SelectedProduct = ({match}) => {
      return (
        <ProductDisplay 
          painting={this.props.paintings.paintings.filter(painting => painting.id === +match.params.paintingId)[0]}
          accessory={this.props.accessories.accessories.filter(accessory => accessory.id === +match.params.accessoryId)[0]}
          jewell={this.props.jewellery.jewellery.filter(jewell => jewell.id === +match.params.jewellId)[0]}
          previews={this.props.reviews.reviews.filter(review => review.paintingId === +match.params.paintingId)}
          areviews={this.props.reviews.reviews.filter(review => review.accessoryId === +match.params.accessoryId)}
          jreviews={this.props.reviews.reviews.filter(review => review.jewellId === +match.params.jewellId)}
        />
      );
    };

     

    return (
      <div>
        {/* <img src="/assets/images/header3.jpg" alt="neighborhood" width="100%" height="120" /> */}
        <Header />
        <Switch>
          <Route exact path='/home' component={ProductPlaceholder} />
          <Route exact path='/paintings' render={() => <ShowPaintings paintings={this.props.paintings} />}  />
          <Route exact path='/accessories' render={() => <ShowAccessories accessories={this.props.accessories} />}  />
          <Route exact path='/jewellery' render={() => <ShowJewellery jewellery={this.props.jewellery} />}  />
          <Route exact path='/free' render={() => <Renderfree frees={this.props.frees} />}  />
          <Route exact path='/sell' render={() => <Rendersell sells={this.props.sells} />} />
          <Route exact path='/artists' render={() => <ShowArtists artists={this.props.artists} />}  />
          <Route exact path='/events' render={() => <EventsComp events={this.props.events} />}  />
          <Route exact path='/services' render={() => <Renderservices services={this.props.services} />}  />
          <Route exact path='/paintings/:paintingId' component={SelectedProduct} />
          <Route exact path='/accessories/:accessoryId' component={SelectedProduct} />
          <Route exact path='/jewellery/:jewellId' component={SelectedProduct} />
          <Route exact path='/checkout' render={() => <CheckoutPage resetCheckoutForm={this.props.resetCheckoutForm} /> } />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));