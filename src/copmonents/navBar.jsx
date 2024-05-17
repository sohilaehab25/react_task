import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../css/navBar.css"


function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Feonka</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active-nav-link' : 'nav-link'}>Home</NavLink>
          <NavLink to="/list_all_teachers" className={({ isActive }) => isActive ? 'nav-link active-nav-link' : 'nav-link'}>AllTeachers</NavLink>
          <NavLink to="/list_all_children" className={({ isActive }) => isActive ? 'nav-link active-nav-link' : 'nav-link'}>AllChildren</NavLink>
          <NavLink to="/list_all_classes" className={({ isActive }) => isActive ? 'nav-link active-nav-link' : 'nav-link'}>AllClasses</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
