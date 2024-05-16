import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Feonka</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">AllTeachers</Nav.Link>
            <Nav.Link href="#features">AllChildren</Nav.Link>
            <Nav.Link href="#pricing">AllClasses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     
    </>
  );
}

export default NavBar;