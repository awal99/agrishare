import React from 'react';
import {Row,Col,Card,Button,Form,Image} from 'react-bootstrap';
import {IoMdAdd,IoMdCreate} from 'react-icons/io';


const RightPage =(props)=>{

    const [farmers, setFarmers] = React.useState([
        { id: 1, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 3, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 4, img: "https://bootdey.com/img/Content/avatar/avatar1.png" },
       
      ]);

      const [awards, setAwards] = React.useState([
        { id: 1, img: "https://png.pngitem.com/pimgs/s/23-233880_gold-award-ribbon-png-transparent-png.png" },
        { id: 2, img: "https://banner2.cleanpng.com/20180715/stz/kisspng-award-trophy-clip-art-5b4bf49ac9fcf2.9313503815317044748274.jpg" },
        { id: 3, img: "https://png.pngitem.com/pimgs/s/23-233880_gold-award-ribbon-png-transparent-png.png" },
        { id: 4, img: "https://banner2.cleanpng.com/20180715/stz/kisspng-award-trophy-clip-art-5b4bf49ac9fcf2.9313503815317044748274.jpg" },
       
      ]);
     

    return(
        <>
        <Row>
        <Col sm='4' md="12">
          <Card className="ml-1 mt-3 mr-1 elevatedCard">
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Agronomers</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>
              <Row>
                {farmers.map(item => {
                  return (
                    <Col sm="3" md="6" className="mt-2 pl-0 pr-1">
                      <Image
                        src={item.img}
                        width="100%"
                        height="130"
                        rounded
                      ></Image>
                    </Col>
                  );
                })}
              </Row>
              <Row className="justify-content-center">
              <Button rounded variant="success" className="editButton mt-3">
                <span>view all</span>
              </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col sm='4' md="12">
          <Card className="ml-1 mt-3 mr-1 elevatedCard">
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Awards</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>
              <Row>
                {awards.map(item => {
                  return (
                    <Col sm="3" md="6" className="mt-2 pl-0 pr-1">
                      <Image
                        src={item.img}
                        width="100%"
                        height="130"
                        rounded
                      ></Image>
                    </Col>
                  );
                })}
              </Row>
              <Row className="justify-content-center">
              <Button rounded variant="success" className="editButton mt-3">
                <span>view all</span>
              </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col sm='4' md="12">
          <Card className="ml-1 mt-3 mr-1 elevatedCard">
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>Awards</Card.Title>
                <Button variant="outline" className="mb-1">
                  <IoMdAdd size={20} />
                </Button>
              </div>
           
              <Row className="justify-content-center">
              <Button rounded variant="success" className="editButton mt-3">
                <span>view all</span>
              </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        </Row>
        </>
    );
}

export default RightPage;