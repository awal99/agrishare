/**
 * @author Sulemana Awal
 * @email [awalsule001@gmail.com]
 * @create date 2020-01-04 09:59:23
 * @modify date 2020-01-04 09:59:23
 * @desc [description]
 */
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  OverlayTrigger,
  Popover,
  Image,
  Button,
  Row,
  Col
} from "react-bootstrap";
import {
  IoMdSearch,
  IoIosPeople,
  IoIosCheckmark,
  IoIosClose,
  IoIosMail,
  IoIosNotifications,
  IoIosContact,
  IoIosDisc,
  IoIosCog,
  IoIosStats,
  IoMdWallet,
  IoIosLogOut,
  IoMdText,
  IoIosBonfire,
  IoIosMore
} from "react-icons/io";
import "./styles.css";
import CenterPage from "../components/CenterPage.jsx";
import LeftPage from "../components/LeftPage.jsx";
import RightPage from "../components/RightPage.jsx";

const HomePage = () => {
  const [profile, setProfile] = React.useState({
    id: 1,
    name: "Josuah Mante",
    profession: "Agronomist",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    status: "online"
  });
  const [requests, setRequests] = React.useState([
    {
      id: 1,
      name: "Emmanuel Quae",
      time: "4 min ago",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      id: 2,
      name: "Sammuel Quae",
      time: "12 min ago",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      id: 3,
      name: "Mohammed Adam",
      time: "4 min ago",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    }
  ]);

  return (
    <>
      <Navbar bg="success" variant="dark">
        <Form inline>
          <div className="customSearch">
            <IoMdSearch />
            <input
              id="inputText"
              type="text"
              placeholder="search for a farmer"
            />
          </div>
        </Form>

        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-sm-2">
          {/* friend request popover start*/}
          <OverlayTrigger
            trigger="click"
            key={"bottom"}
            placement={"bottom"}
            rootClose={true}
            overlay={
              <Popover
                id={`popover-positioned-bottom`}
                className="popoverRequest"
              >
                <Popover.Content>
                  <h6>Friend Requests</h6>
                  <ul className="requestList">
                    {requests.map(item => {
                      return (
                        <li>
                          <div className="requestListItem">
                            <div style={{ display: "flex" }}>
                              <Image
                                src={item.img}
                                className="requestUserImg"
                                roundedCircle
                              />
                              <div style={{ marginLeft: 5, lineHeight: 1 }}>
                                <strong>{item.name}</strong>
                                <br />
                                <i>{item.time}</i>
                              </div>
                            </div>
                            <div>
                              <Button variant="success" className="buttonSm">
                                <IoIosCheckmark
                                  color="#fff"
                                  size={20}
                                  className="iconAlign"
                                />
                              </Button>
                              <Button variant="default" className="buttonSm">
                                <IoIosClose size={20} />
                              </Button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </Popover.Content>
              </Popover>
            }
          >
            <Nav.Link href="#home">
              <IoIosPeople size={25} color="#ffffff" />
            </Nav.Link>
          </OverlayTrigger>
          {/* friend request popover end */}

          {/* notifications */}
          <Nav.Link href="#features">
            <IoIosNotifications size={25} color="#ffffff" />
          </Nav.Link>

          {/* mails */}
          <Nav.Link href="#pricing">
            <IoIosMail size={25} color="#ffffff" />
          </Nav.Link>

          {/* profile */}
          <div className="profileSection">
            <OverlayTrigger
              trigger="click"
              key={"bottom"}
              placement={"bottom"}
              rootClose={true}
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Content>
                    <div>
                      <IoIosDisc color="green" className="mr-2" size={20} />
                      <strong className="mr-1">Status:</strong>
                      {profile.status}
                    </div>
                    <hr />
                    <ul className="pMenuList">
                      {/* account settings */}
                      <Router>
                        <li className="mt-2">
                          <Link to="/">
                            <div className="pMenuListItem">
                              <div style={{ display: "flex" }}>
                                <IoIosCog size={20} />
                                <div className="ml-4">Account Settings</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <hr />
                        {/* Dashboard */}
                        <li className="mt-2">
                          <Link to="/">
                            <div className="pMenuListItem">
                              <div style={{ display: "flex" }}>
                                <IoIosStats size={20} />
                                <div className="ml-4">Dashboard</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <hr />
                        {/* My Wallet */}
                        <li className="mt-2">
                          <Link to="/">
                            <div className="pMenuListItem">
                              <div style={{ display: "flex" }}>
                                <IoMdWallet size={20} />
                                <div className="ml-4">My Wallet</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <hr />
                        {/* View Profile */}
                        <li className="mt-2">
                          <Link to="/">
                            <div className="pMenuListItem">
                              <div style={{ display: "flex" }}>
                                <IoIosContact size={20} />
                                <div className="ml-4">View Profile</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <hr />
                        {/* Logout */}
                        <li className="mt-2">
                          <Link to="/">
                            <div className="pMenuListItem">
                              <div style={{ display: "flex" }}>
                                <IoIosLogOut size={20} />
                                <div className="ml-4">Logout</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </Router>
                    </ul>
                  </Popover.Content>
                </Popover>
              }
            >
              <Nav.Link href="#home">
                <IoIosContact size={25} className="mr-2" color="#ffffff" />
                {profile.name}
              </Nav.Link>
            </OverlayTrigger>
          </div>
        </Nav>
      </Navbar>

      {/* // user menu below navbar */}
      <Row className="justify-content-center">
        <div className="menuBelow">
          <Router>
            <Col md="3">
              <Link to="/">
                <IoIosStats color="#F73F2C" />
                <span className="menuText">True Feeds</span>
              </Link>
            </Col>
            <Col md="3">
              <Link to="/">
                <IoMdText color="#0DAB07" />
                <span className="menuText">About Us</span>
              </Link>
            </Col>
            <Col md="4">
              <Link to="/">
                <IoIosBonfire color="#D9AD0C" />
                <span className="menuText">Manage Transactions</span>
              </Link>
            </Col>
            <Col md="2">
              <Link to="/">
                <IoIosMore color="" />
                <span className="menuText">More</span>
              </Link>
            </Col>
          </Router>
        </div>
      </Row>

      {/*
       ***
       *** Section for lower page, devided into 3 sections; left, center and right.
       ***
       */}
      <Row className="justify-content-center">
        <Col sm='12' md='12' lg='10'>
        <Row>
        <Col sm='12' md="3" className="">
          <LeftPage profile={profile} />
        </Col>
        <Col sm='12' md="6" className="">
          <CenterPage profile={profile}/>
        </Col>
        <Col sm='12' md="3" className="">
          <RightPage profile={profile}/>
        </Col>
        </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
