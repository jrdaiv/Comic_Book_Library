import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" expand="sm" className='nav-bar'>
            <Container className='container'>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/comics">Comics</Nav.Link>
                    <Nav.Link href="/characters">Characters</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar