import React, { Component } from 'react';
import { Button,  Label,  Modal, ModalBody, 
    ModalHeader, Row, Col, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class CheckoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastname: '',
            street: '',
            city: '',
            statenm: '',
            zipcode: '',
            phoneNum:'',
            email:'',
            specifications:'',
            paymentradios: '',
            cname: '',
            cnumber: '',
            cvv: '',
            expiry: '',
            czipcode: '',
            isModal: false,

            touched: {
                firstName: false,
                lastname: false,
                street: false,
                city: false,
                statenm: false,
                zipcode: false,
                phoneNum: false,
                email: false,
                specifications: false,
                paymentradios: false,
                cname: false,
                cnumber: false,
                cvv: false,
                expiry: false,
                czipcode: false

            }
        };
        
        this.handlePaymentType = this.handlePaymentType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handlePaymentType (event) {
        const target = event.target;
        document.getElementById("ccDetails").style.display = (target.id === 'cc' ? "block" : "none");
    }

    toggleModal() {
                this.setState({
                    isModal: !this.state.isModal
                });
             }

    handleSubmit(values) {
        this.props.resetCheckoutForm(values);
        this.toggleModal();
    }

    

    render() {

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row row-content align-items-center">
                        <div className='col-12 mt-3 mb-3'>
                            <h2>Enter Your Details </h2>
                        </div>
                        <div className="col-md-10">
                            <Form model="checkoutForm" onSubmit={values => this.handleSubmit(values)} >
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={8}>
                                        <Control.text  model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                            
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={8}>
                                        <Control.text  model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }} 
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="street" md={2}>Street Address</Label>
                                    <Col md={8}>
                                        <Control.text  model=".street" id="street" name="street"
                                            placeholder="Street Address"
                                            className="form-control" 
                                            validators={{
                                                required,
                                                minLength: minLength(2)
                                            }} 
                                            
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".street"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="city" md={2}>City</Label>
                                    <Col md={8}>
                                        <Control.text  model=".city"  name="city" id="city"
                                            placeholder="City"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2)
                                            }}  
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".city" 
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="statenm" md={2}>State</Label>
                                    <Col md={8}>
                                        <Control.text  model=".statenm" name="statenm" id="statenm"
                                            placeholder="State"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2)
                                            }}  
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".statenm"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="zipcode" md={2}>Zipcode</Label>
                                    <Col md={8}>
                                        <Control.text  model=".zipcode" name="zipcode" id="zipcode"
                                            placeholder="Zipcode"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2)
                                            }} 
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".zipcode" 
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters'
                                            }}
                                        />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={8}>
                                        <Control.text  model=".phoneNum" name="phoneNum" id="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                isNumber
                                            }}  
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Enter a valid phone number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={8}>
                                        <Control.text  model=".email" name="email" id="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }} 
                                        />
                                        <Errors
                                            className='text-danger'
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <div className="col-md-4 mb-1">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-control-checkbox"
                                            /> {' '}
                                            <strong>Do you want to customise the item?</strong>
                                        </Label>
                                    </div>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="specifications" md={2}>Specifications</Label>
                                    <div className="col-md-8 mb-1">
                                        <Control.textarea  model=".specifications" name="specifications" id="specifications"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </div>
                                </Row>

                                <Row className="form-group">
                                    Payment Type
                                    <div className='form-radio'>
                                        <div className='mb-1'>
                                            <Label check>
                                                <Input type="radio"
                                                    value="pp"
                                                    name="paymentradios"
                                                    onClick={this.handlePaymentType} /> {' '}
                                                    <i class="fa fa-paypal fa-lg" /> Paypal
                                            </Label>
                                        </div>
                                        
                                        <div className='mb-1'>
                                            <Label check>
                                                <Input type="radio"
                                                    value="cc"
                                                    name="paymentradios"
                                                    id='cc'
                                                    onClick={this.handlePaymentType} /> {' '}
                                                    <i class="fa fa-credit-card fa-lg" /> Credit card
                                            </Label>
                                        </div>
                                    </div>
                                </Row>
                               
                           
                                <div id="ccDetails" className="row cc-details">

                                    <Row className="form-group">
                                        <Label htmlFor="cname" md={2}>Name</Label>
                                        <div className='col-md-8 mt-1'>
                                            <Control.text  model=".cname" id="cname" name="name"
                                                placeholder="Name"
                                                className="form-control"
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".cname"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                                />
                                        </div>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="cnumber" md={2}>Card Number</Label>
                                        <div className='col-md-8 mt-1'>
                                            <Control.text  model=".cnumber" id="cnumber" name="cnumber"
                                                placeholder="Card Number"
                                                className="form-control"
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".cnumber"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 16 characters'
                                                }}
                                            />
                                                
                                        </div>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="cvv" md={2}>CVV</Label>
                                        <div className='col-md-8 mt-1'>
                                            <Control.text  model=".cvv" id="cvv" name="cvv"
                                                placeholder="cvv"
                                                className="form-control"
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".cvv"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 3 characters'
                                                }}
                                            />
                                                
                                        </div>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="expiry" md={2}>Card Expiry</Label>
                                        <div className='col-md-8 mt-1'>
                                            <Control.text  model=".expiry" id="expiry" name="expiry"
                                                placeholder="expiry"
                                                className="form-control"
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".expiry"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required'
                                                }}
                                            />
                                                
                                        </div>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="czipcode" md={2}>Zipcode</Label>
                                        <div className='col-md-8 mt-1'>
                                            <Control.text  model=".czipcode" id="czipcode" name="czipcode"
                                                placeholder="Zip code"
                                                className="form-control"
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".czipcode"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required'
                                                }}
                                            /> 
                                        </div>
                                    </Row>
                                    
                                </div>
                                        
                                <Row className="form-group">
                                    <div className='col-md-8 mt-1'>
                                    <Button type="submit"  color="primary"> Submit
                                    </Button>
                                        <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
                                            <ModalHeader style={{ background: "#abd4fa" }} toggle={this.toggleModal}>Confirmation</ModalHeader>
                                            <ModalBody >
                                                <h5>Thank you!. Your order is confirmed.</h5>
                                                <Button><Link to='/home'>OK</Link></Button>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </Row>
                            </Form>
                           
                        </div>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }
}




export default CheckoutPage;


