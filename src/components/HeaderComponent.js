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
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><h4>MyNeighborhood</h4></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar fill>
                                
                                <NavItem>
                                <NavLink className="nav-link text-light" to="/home">Home
                                </NavLink>
                                    
                                </NavItem>
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav caret>
                                        Shop local
                                        </DropdownToggle>
                                        <DropdownMenu right className="dropdown">
                                            <DropdownItem><Link to='/paintings'>
                                            Paintings</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem><Link to='/accessories'>
                                                Accessories</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem><Link to='/jewellery'>
                                            Jewellery</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>



                                    {/* <li  >Paintings</li>
                                    <li>Accessories</li>
                                    <li>Jewellery</li>
                                    <li>Artists</li>
                                     */}
                                    
                                    
                                    
                                    
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/services"> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/eventscomp"> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/artists"> Free 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/artists"> Sell
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text text-light ml-auto" onClick={this.toggleModal} >Login</span>
                        </Collapse>
                    </div>
                </Navbar>
                

                <Modal id="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;