import {Navbar, Container, Nav} from "react-bootstrap"
const NavigasiBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Ariq Films</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="anime"></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigasiBar 