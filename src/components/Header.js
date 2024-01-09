import React from 'react'
import AddMovie from './AddMovie';
import { Container,  Nav,  Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = ({add}) => {
  return (
    <div>
        <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <LinkContainer to={'/'} >
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/MovieList'} >
          <Nav.Link >Movie List</Nav.Link>
          </LinkContainer>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
<div className='header'>
  <h1 className='title'>Movie List</h1>
<AddMovie add={add} />
</div>

</div>
    );
}


export default Header