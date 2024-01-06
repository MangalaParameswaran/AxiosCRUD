import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  // Initialize the navigate function from react-router-dom
  let navigate = useNavigate();

  return (
    <>
      {/* Sticky navigation bar with a grey background */}
      <div style={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: 'grey' }}>
        {/* Bootstrap Navbar */}
        <Navbar expand="lg" className="">
          <Container>
            {/* Brand logo and name */}
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvON0nie47uPQN8KZKryCElCjY6jJtbNGbvkQOyMDwgvgo7iFiQjB-cJnNmgCciQOD1s&usqp=CAU"
                width="30"
                height="30"
                className="d-inline-block align-top rounded-5"
              />{' '}
              <b>Bloger App</b>
            </Navbar.Brand>

            {/* Responsive navigation toggle button */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Navigation links */}
            <Navbar.Collapse id="basic-navbar-nav">
              <div className='text-center'>
                {/* Navigation items */}
                <Nav className="me-auto">
                  <Nav.Link onClick={() => navigate('/')}><b className='btn btn-outline-primary fw-bold text-light'>Home</b></Nav.Link>
                  <Nav.Link onClick={() => navigate('/dashboard')}><b className='btn btn-outline-primary fw-bold text-light'>DashBoard</b></Nav.Link>
                  <Nav.Link onClick={() => navigate('/create')}><b className='btn btn-outline-primary fw-bold text-light'>Create</b></Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default TopBar;
