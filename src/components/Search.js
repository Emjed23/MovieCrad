import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Search = ({getSearch,getRate}) => {
    const getNewRate=(newRate)=>{
        getRate(newRate)
    } 
   
     return (
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
          </Nav>
          <ReactStars
  count={5}
  onChange={getNewRate}
  size={25}
  color2={'#ffd700'} />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>getSearch(e.target.value)}
            />
            <Button variant="primary" >Search </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Search