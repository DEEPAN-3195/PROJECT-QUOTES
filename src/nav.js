import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DEEPAN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quote">Quotes</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;