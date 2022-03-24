import React, { Component }  from 'react';
import { Nav, Navbar,  NavbarToggler, Collapse, NavItem, NavbarBrand,  UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, 
Button, Modal, ModalHeader, ModalBody, Form , FormGroup, Input, Label  } from 'reactstrap';

import { NavLink } from 'react-router-dom';

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
                        <NavbarBrand className="mr-auto" href="/"><h4>Neighborhood Makers and Crafters</h4></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/home"> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown setActiveFromChild >
                                        <DropdownToggle tag="a" className="nav-link text-light" caret>
                                        Categories
                                        </DropdownToggle>
                                        <DropdownMenu >
                                            <DropdownItem tag="a" href="/paintings" >Paintings</DropdownItem>
                                            <hr />
                                            <DropdownItem tag="a" href="/accessories" >Accessories</DropdownItem>
                                            <hr />
                                            <DropdownItem tag="a" href="/jewellery" >Jewellery</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/artists"> Artists
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