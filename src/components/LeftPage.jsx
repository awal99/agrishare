import React from "react";
import { Row, Col, Card, Image, Button,Form } from "react-bootstrap";
// import { Player, ControlBar } from "video-react";
import { IoMdCreate, IoMdAdd,IoMdSearch,IoIosCheckmark } from "react-icons/io";
import "./LeftPageStyle.css";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm"
};

const LeftPage = props => {
  React.useEffect(() => {}, []);

  const [farmers, setFarmers] = React.useState([
    { id: 1, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 2, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 3, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 4, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 5, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 6, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 7, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 8, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 9, img: "https://bootdey.com/img/Content/avatar/avatar1.png" }
  ]);
 
  const [suggestions,setSuggestions] = React.useState([
    {
        id: 1,
        name: "Emmanuel Qu",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id: 2,
        name: "Emmanuel Qu",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id: 3,
        name: "Emmanuel Qu",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id: 4,
        name: "Emmanuel Qu",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id: 5,
        name: "Emmanuel Qu",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
  ])

  return (
    <>
      <Row>
        <Col sm='6' md="12">
          <Card className="ml-3 mt-3 mr-0 elevatedCard">
            <Card.Body>
              <Row className="justity-content-center">
                <Col xs="12" md="12" className="justity-content-center">
                  <Image src={props.profile.img} className="profileImg" />
                  <br />
                  <h4>
                    <span>{props.profile.name}</span>
                  </h4>
                  <span className="profileName">
                    {props.profile.profession}
                  </span>
                  <p className="introText mt-3">{props.profile.intro}</p>
                </Col>
              </Row>
              <span>Contacts</span>
              <Row className="ml-1">
                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button variant="danger" className="contactBox bg-danger">
                    <span>K</span>
                  </Button>
                </Col>
                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button variant="primary" className="contactBox bg-primary">
                    <span>W</span>
                  </Button>
                </Col>
                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button variant="success" className="contactBox bg-success">
                    <span>X</span>
                  </Button>
                </Col>

                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button variant="primary" className="contactBox bg-primary">
                    <span>W</span>
                  </Button>
                </Col>
                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button variant="success" className="contactBox bg-success">
                    <span>X</span>
                  </Button>
                </Col>
                <Col sm="2" md="4" className="mt-2 pl-0">
                  <Button
                    variant="secondary"
                    className="contactBox bg-secondary"
                  >
                    <span>+</span>
                  </Button>
                </Col>
              </Row>

              <Button rounded variant="success" className="editButton mt-3">
                <IoMdCreate color="#ffffff" className="mt-1" />
                <span>edit profile</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* second card */}

        <Col sm='6' md="12">
          <Card className="mt-3 ml-3 mr-0 elevatedCard">
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Farm Media</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>
              <Row>
                <Col sm='6' md="6" className="mt-2 pr-1">
                <Image width="100%" src="http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" height="125"/>
                </Col>
                <Col sm='6' md="6" className="mt-2 pl-0">
                  <video width="100%" height="125" controls poster="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
                    <source src={sources.bunnyTrailer} type="video/mp4" />
                  </video>
                </Col>
                <Col  md="12">
                  <video width="100%" height="125" controls poster="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
                    <source src={sources.bunnyMovie} type="video/mp4" />
                  </video>
                </Col>
                <Col sm='6' md="6" className="mt-2 pr-1">
                <Image width="100%" src="http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" height="120"/>
                </Col>
                <Col sm='6' md="6" className="mt-2 pl-0">
                <Image width="100%" src="http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" height="120"/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* third card */}

        <Col sm='12' md="12">
          <Card className="mt-3 ml-3 mr-0 elevatedCard">
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Farmers</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>
              <Row>
                {farmers.map(item => {
                  return (
                    <Col sm="2" md="4" className="mt-2 pl-0 pr-1">
                      <Image
                        src={item.img}
                        width="100%"
                        height="100"
                        rounded
                      ></Image>
                    </Col>
                  );
                })}
              </Row>
              <Row className="justify-content-center">
              <Form inline>
                <div className="customSearch mt-3">
                    <IoMdSearch />
                    <input
                    id="inputText"
                    type="text"
                    placeholder="search for a farmer"
                    />
                </div>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col sm md='12' >
            <Card className="ml-3 mt-3 mb-4 mr-0 elevatedCard">
            <Card.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Suggestions</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>

            <ul className="requestList">
                    {suggestions.map(item => {
                      return (
                        <li>
                          <div className="requestListItem">
                            <div style={{ display: "flex" }}>
                              <Image
                                src={item.img}
                                className="requestUserImg mb-2"
                                roundedCircle
                              />
                              <div style={{ marginLeft: 5, lineHeight: 1 }}>
                                <span>{item.name}</span>
                              </div>
                            </div>
                            <div>
                              <Button variant="success" style={{height:30,justifyContent:'center'}}>
                               Add
                              </Button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

              <Button rounded variant="success" className="editButton mt-2">
                <span>view all</span>
              </Button>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </>
  );
};

export default LeftPage;
