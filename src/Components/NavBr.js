
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from 'react-stars';

function NavBr({setInputSearch,setInputStars}) {
  return (


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{color:"red"}} href="#">NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movies</Nav.Link>
            <Nav.Link href="#action2">Series</Nav.Link>
            
            
          </Nav>
          
          <Form className="d-flex"> 
          <ReactStars
                count={5}
                value={0}
                onChange={(e)=>setInputStars(e)}
                half={false}
                size={24}
                color2={'#ffd700'} /> 
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setInputSearch(e.target.value)}
            />
            <Button className="buttonStyle" onClick={()=> (setInputSearch(""), setInputStars(0))} variant="outline-success">Clear</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBr;