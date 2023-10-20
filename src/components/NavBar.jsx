import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <header>
       <nav>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/todolist">TodoList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </nav>
    </header>
  )
}

export default NavBar;