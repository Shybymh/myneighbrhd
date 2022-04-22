import React, { Component }  from 'react';
import {  Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Tab, Tabs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Header Component rendering Jumbotron and Navigation bar

class SecondNav extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Nav className="justify-content-center" id="tabnav">
                <NavItem>
                    <NavLink className="nav-link" to="/paintings"> Paintings
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/accessories"> Accessories
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/jewellery"> Jewellery
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/artists"> Artists
                    </NavLink>
                </NavItem>
                </Nav>
            </React.Fragment>
               
                 {/* <Navbar id="secondNav" sticky="top" expand="md">

                        <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Categories">
                            <Nav fill id="tabnav">
                            <NavItem>
                                <NavLink className="nav-link" to="/paintings"> Paintings
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/accessories"> Accessories
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/jewellery"> Jewellery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/artists"> Artists
                                </NavLink>
                            </NavItem>
                            </Nav>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            <Nav fill id="tabnav2">
                            <NavItem>
                                <NavLink className="nav-link" to="/paintings"> Paintings
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/accessories"> Accessories
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/jewellery"> Jewellery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/artists"> Artists
                                </NavLink>
                            </NavItem>
                            </Nav>
                            </Tab>
                            <Tab eventKey="contact" title="Contact" >
                            <Nav fill id="tabnav3">
                            <NavItem>
                                <NavLink className="nav-link" to="/paintings"> Paintings
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/accessories"> Accessories
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/jewellery"> Jewellery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/artists"> Artists
                                </NavLink>
                            </NavItem>
                            </Nav>
                            </Tab>
                            </Tabs>
                            </Navbar> */}
                    
                


                    
                {/* <Navbar id="secondNav" sticky="top" expand="md">
                    <div className="container-fluid border-bottom">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar align-items-center>
                                
                                <NavItem>
                                <NavLink className="nav-link" to="/paintings"> Paintings
                                </NavLink>
                                    
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/accessories"> Accessories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/jewellery"> Jewellery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/artists"> Artists
                                    </NavLink>
                                </NavItem>
                                
                                
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar> */}


                {/* <Navbar id="secondNav">
                <Nav navbar className="ml-auto">    
                    <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Home">
                    <NavItem>
                        <NavLink className="nav-link" to="/paintings"> Paintings
                            </NavLink>
                            
                    </NavItem>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        bvhhj
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        fhgfjhghj
                    </Tab>
                    </Tabs>
                </Nav>
                </Navbar> */}
            
        );
    }
}

export default SecondNav;