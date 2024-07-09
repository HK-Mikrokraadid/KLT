import React, { useState, useEffect } from "react";
import NavElement from './NavElement';
import {Nav, Navbar } from 'react-bootstrap';
import Logout from "./Logout";
import { Link } from 'react-router-dom';

function NaviBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, [])
  return (
    <div>
      <Navbar bg="primary-subtle">
          <Nav>
              <Nav.Link as={Link} to='/home'><NavElement title='Home' /></Nav.Link>
              <Nav.Link as={Link} to='/gallery'><NavElement title='Gallery' /></Nav.Link>
              <Nav.Link as={Link} to='/posts'><NavElement title='Posts' /></Nav.Link>
              <Nav.Link as={Link} to='/subscribe'><NavElement title='Subscribe' /></Nav.Link>
              {loggedIn ? (
                <Logout />
              ) : (
                <Nav.Link as={Link} to='/'><NavElement title='Login' /></Nav.Link>
              )}
          </Nav>
      </Navbar>  
    </div>
  );
};

export default NaviBar; //seda hakkan tuunima