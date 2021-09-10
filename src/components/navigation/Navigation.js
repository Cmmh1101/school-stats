import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="nav" expand="md" dark>
        <div className="container p-0">
          <NavbarBrand href="/" className="logo-container">
            <img src="../images/logobrand.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav tag="ul" className="mr-auto" navbar>
              <NavItem tag="li">
                <NavLink to="/" onClick={toggle}>
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="drop_link py-0">
                  Stats
                </DropdownToggle>
                <DropdownMenu right className="drop_menu">
                  <DropdownItem>
                    <NavLink to="/internetchart" onClick={toggle}>
                      Internet Access
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/healthchart" onClick={toggle}>
                      Health conditions
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/traveltimechart" onClick={toggle}>
                      Travel Time
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem tag="li">
                <NavLink to="/contact" onClick={toggle}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
