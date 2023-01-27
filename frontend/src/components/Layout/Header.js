import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import SearchBox from '../UI/SearchBox';
import { logout } from '../../features/user/userSlice';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.navbar}>
      <Navbar
        className={classes.navbar}
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>AirPhotos</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox />
            <Nav className='mr-auto'>
              <LinkContainer to='/photos'>
                <Nav.Link className='mr-3'>
                  <i className='fas fa-plane'></i> Photos
                </Nav.Link>
              </LinkContainer>

              {userInfo && (
                <React.Fragment>
                  <LinkContainer to='/myphotos'>
                    <Nav.Link className='mr-3'>
                      <i class='fa-solid fa-image'></i> My Photos
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/upload'>
                    <Nav.Link className='mr-3'>
                      <i class='fa-solid fa-cloud-arrow-up'></i> Upload New
                      Photo
                    </Nav.Link>
                  </LinkContainer>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
