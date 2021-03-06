import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar expand="lg" sticky='top' className='navigation-bar shadow-sm' variant="light">
            <Container>
                <Navbar.Brand className='text-primary text-uppercase fs-4 fw-bold' as={Link} to='/'>Gigabyte</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {!user?.uid ?
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                            :
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link onClick={() => signOut(auth)}>Log out</Nav.Link>
                                <Nav.Link as={Link} to="#">{user?.displayName}</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

