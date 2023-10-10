import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



import './navBar.css'

function NavBar() {
  return (
    <>
        <Navbar key="lg" expand="lg" className="navBar mx mt-4">
          <Container fluid>

            <Navbar.Brand href="#">
              <div>
                <svg width="89" height="75" viewBox="0 0 89 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.7744 6.65585H21.5944V16.8831H67.7744V6.65585Z" fill="white"/>
                  <path d="M50.8514 8.888H38.5176V58.3198H50.8514V8.888Z" fill="white"/>
                  <path d="M6.96594 65.0958L21.4579 21.1039H32.6679L39.3719 26.6925L39.378 44.2965L30.0009 35.4825L19.485 65.138L6.96594 65.0958Z" fill="white"/>
                  <path d="M82.116 65.1017L67.6241 20.8198H56.4141L49.7101 26.6193L49.704 44.2596L59.0811 35.4274L69.7979 65.138L82.116 65.1017Z" fill="white"/>
                </svg>
              </div>
            </Navbar.Brand>

              <Offcanvas.Body className='d-flex bd-highlight'>

                <div className='navLinkContainer h-100 d-flex mx-5 align-items-center flex-fill bd-highlight'> 
                   <Nav.Link href="#action1" className='colorwhite mx-3 f25'>Home</Nav.Link>
                   <Nav.Link href="#action1" className='colorwhite mx-3 f25'>Tienda</Nav.Link>
                   <Nav.Link href="#action1" className='colorwhite mx-3 f25'>Nosotros</Nav.Link>
                   <Nav.Link href="#action1" className='colorwhite mx-3 f25'>Ofertas</Nav.Link>
                   <Nav.Link href="#action1" className='colorwhite mx-3 f25'>Categorias</Nav.Link>
                </div>

                <div className='buttonsContainer'>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">
                      <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.9999 10.5C27.9999 15.1078 24.0592 19 18.9999 19C13.9407 19 9.99994 15.1078 9.99994 10.5C9.99994 5.89224 13.9407 2 18.9999 2C24.0592 2 27.9999 5.89224 27.9999 10.5Z" stroke="white" stroke-width="4"/>
                          <path d="M12.2256 19.321L1.99998 30.1858" stroke="white" stroke-width="4"/>
                      </svg>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9999 2.75H5.30244L5.24994 2.31125C5.1425 1.39927 4.70417 0.558415 4.01805 -0.0519028C3.33193 -0.662221 2.44572 -0.999573 1.52744 -1L-6.10352e-05 -1V1.5H1.52744C1.83361 1.50004 2.12911 1.61245 2.3579 1.81589C2.5867 2.01934 2.73287 2.29969 2.76869 2.60375L4.74994 19.4387C4.85738 20.3507 5.29571 21.1916 5.98183 21.8019C6.66794 22.4122 7.55415 22.7496 8.47244 22.75H24.9999V20.25H8.47244C8.16608 20.2499 7.87042 20.1373 7.6416 19.9336C7.41277 19.7299 7.26673 19.4493 7.23119 19.145L7.06744 17.75H27.2949L29.9999 2.75ZM25.2049 15.25H6.77369L5.59744 5.25H27.0087L25.2049 15.25Z" fill="white"/>
                        <path d="M8.74994 29C10.1307 29 11.2499 27.8807 11.2499 26.5C11.2499 25.1193 10.1307 24 8.74994 24C7.36923 24 6.24994 25.1193 6.24994 26.5C6.24994 27.8807 7.36923 29 8.74994 29Z" fill="white"/>
                        <path d="M21.2499 29C22.6307 29 23.7499 27.8807 23.7499 26.5C23.7499 25.1193 22.6307 24 21.2499 24C19.8692 24 18.7499 25.1193 18.7499 26.5C18.7499 27.8807 19.8692 29 21.2499 29Z" fill="white"/>
                      </svg>
                    </Nav.Link>                   
                  </Nav>
                </div>
              </Offcanvas.Body>

          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;