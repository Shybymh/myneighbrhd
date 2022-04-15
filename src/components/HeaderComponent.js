import React, { Component }  from 'react';
import { Nav, Navbar,  NavbarToggler, Collapse, NavItem, NavbarBrand,   
Button, Modal, ModalHeader, ModalBody, Form , FormGroup, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

// Header Component rendering Jumbotron and Navigation bar

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false,
          status: 'Login'
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.nameUser = this.nameUser.bind(this);
       
        
    }

    

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    nameUser() {
        (this.userName.value) ? this.setState({ status: `${this.userName.value}`}) : this.setState({ status: 'Login'})

       
    }
    

    handleLogin(event) {
        this.toggleModal();
        this.nameUser();
        event.preventDefault();
    }

    

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto"  href="/"><h4>MyNeighborhood</h4></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/home">Home
                                </NavLink>
                                </NavItem>

                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav >
                                        Shop local
                                        </DropdownToggle>
                                        <DropdownMenu right className="dropdown">
                                            <DropdownItem className="dropdownitem"><Link to='/paintings'>
                                            Paintings</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className="dropdownitem"><Link to='/accessories'>
                                                Accessories</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className="dropdownitem"><Link to='/jewellery'>
                                            Jewellery</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/services"> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/eventscomp"> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/frees"> Free 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/sells"> Sell
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text text-light ms-auto" onClick={this.toggleModal}><i class="fa fa-lg fa-user"/>{' '}{this.state.status}</span>
                            
                        </Collapse>
                    </div>
                </Navbar>
                

                <Modal id="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">Name</Label>
                                <Input type="name" id="userName" name="name" 
                                    innerRef={input => this.userName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" 
                                    innerRef={input => this.email = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Remember me?
                                </Label>
                            </FormGroup>
                            
                            <Button className="mt-1" type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;