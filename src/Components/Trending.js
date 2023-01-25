import { Card, Container, Row, Col, Image } from "react-bootstrap"
import NarutoImage from "../Assets/Images/Anime/Naruto.jpeg"
import BlackloverImage from "../Assets/Images/Anime/Blackclover.jpeg"
import DoraemonImage from "../Assets/Images/Anime/Doraemon.jpg"
const Trending = () => {
    return (
    <div>
    <Container>
        <br />
        <br />
        <h1 className="text-white"> TRENDING MOVIES </h1>
        <Row>
            <Col md={4} className="moviesWrapper" id="trending">
                <Card className="moviesImage">
                <Image src={NarutoImage} alt="Naruto Movies" className="moviestrending" />
                <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Naruto</Card.Title>
                <Card.Text className="text-left">
                   Naruto
                </Card.Text>
                <Card.Text className="text-left">
                    Last updated 3 mins ago
                    </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="moviesWrapper">
                <Card className="moviesImage">
                <Image src={BlackloverImage} alt="Naruto Movies" className="moviestrending" />
                <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Blackclover</Card.Title>
                <Card.Text className="text-left">
                    Black Clover
                </Card.Text>
                <Card.Text className="text-left">
                    Last updated 3 mins ago
                    </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="moviesWrapper">
                <Card className="moviesImage">
                <Image src={DoraemonImage} alt="Naruto Movies" className="moviestrending" />
                <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Doraemon</Card.Title>
                <Card.Text className="text-left">
                Doraemon
                </Card.Text>
                <Card.Text className="text-left">
                    Last updated 3 mins ago
                    </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            </Row>
    </Container>
       
     </div>
    )
}

export default Trending