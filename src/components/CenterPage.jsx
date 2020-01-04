/**
 * @author Sulemana Awal
 * @email [awalsule001@gmail.com]
 * @create date 2020-01-04 10:00:00
 * @modify date 2020-01-04 10:00:00
 * @desc [description]
 */
import React from "react";
import {
  Row,
  Col,
  Card,
  Image,
  Button,
  Form,
  FormControl
} from "react-bootstrap";
import AvatarStack from "./AvatarStack";
import {
  IoMdCamera,
  IoIosPricetag,
  IoMdAttach,
  IoMdClock,
  IoIosHeart,
  IoMdText,
  IoMdShare,
} from "react-icons/io";
import "./CenterPageStyles.css";

const sources = {
    sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
    test: "http://media.w3.org/2010/05/video/movie_300.webm"
  };

const CenterPage = props => {
  const [posts, setPosts] =React.useState([
    {
        id:1,
        likes:15,
        comments:40,
        share:7,
        timeOfPost: '10 hours ago',
        contentMedia:[
            {type:'img', src:"http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" },
            {type:'vid',src:"http://media.w3.org/2010/05/sintel/trailer.mp4",poster:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
            {type:'vid',src:"http://media.w3.org/2010/05/sintel/trailer.mp4",poster:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
            
        ],
        contentText:` Far far away, behind the word mountains, far from the
        countries Vokalia and Consonantia, there live the blind
        texts. Separated they live in Bookmarksgrove right at the
        coast of the Semantics, a large language ocean. A small
        river named Duden flows by their place and supplies it with
        the necessary regelialia. It is a paradisematic country, in
        which roasted parts of sentences fly into your mouth. Even
        the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a
        small line of blind text by the name of Lorem Ipsum decided
        to leave for the far World of Grammar. The Big Oxmox advised
        her not to do so, because there were thousands of bad
        Commas, wild Question Marks and devious Semikoli, but the
        Little Blind Text didn’t listen. She packed her seven
        versalia, put her initial into the belt and made herself on
        the way. When she reached the first hills of the Italic
        Mountains, she had a last view back on the skyline of her
        hometown Bookmarksgrove, the headline of Alphabet Village
        and the subline of her own road, the Line Lane. Pityful a
        rethoric question ran over her cheek, then`
    },
    {
        id:2,
        likes:6,
        comments:10,
        share:2,
        timeOfPost:'12 hours ago',
        contentMedia:[],
        contentText:` Far far away, behind the word mountains, far from the
        countries Vokalia and Consonantia, there live the blind
        texts. Separated they live in Bookmarksgrove right at the
        coast of the Semantics, a large language ocean. A small
        river named Duden flows by their place and supplies it with
        the necessary regelialia. It is a paradisematic country, in
        which roasted parts of sentences fly into your mouth. Even
        the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a
        small line of blind text by the name of Lorem Ipsum decided
        to leave for the far World of Grammar. The Big Oxmox advised
        her not to do so, because there were thousands of bad
        Commas, wild Question Marks and devious Semikoli, but the
        Little Blind Text didn’t listen. She packed her seven
        versalia, put her initial into the belt and made herself on
        the way. When she reached the first hills of the Italic
        Mountains, she had a last view back on the skyline of her
        hometown Bookmarksgrove, the headline of Alphabet Village
        and the subline of her own road, the Line Lane. Pityful a
        rethoric question ran over her cheek, then`
    },
     
      {
          id:3,
          likes:6,
          comments:10,
          share:2,
          timeOfPost:'17 hours ago',
          contentMedia:[
            {type:'img', src:"http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" },
              {type:'vid', src:"http://media.w3.org/2010/05/sintel/trailer.mp4",poster:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
              {type:'vid', src:"http://media.w3.org/2010/05/sintel/trailer.mp4",poster:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
              {type:'img', src:"http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" },
              {type:'img',src:"http://pluspng.com/img-png/farmer-png-hd-images-farmers-in-andhra-pradesh-set-an-example-donate-rs-3-5-lakhs-for-development-of-new-capital-the-better-india-1200.png" },
          ],
          contentText:`Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind
          texts. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean. A small
          river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in
          which roasted parts of sentences fly into your mouth. `
      },
     
  ]);

  const [avatars,setAvatars] = React.useState([
      {id:1,img:"https://bootdey.com/img/Content/avatar/avatar2.png"},
      {id:2,img:"https://bootdey.com/img/Content/avatar/avatar2.png"},
      {id:3,img:"https://bootdey.com/img/Content/avatar/avatar2.png"},
      {id:4,img:"https://bootdey.com/img/Content/avatar/avatar2.png"}
  ])

  return (
    <>
      <Row className="">
        <Col md="12" className="pl-0 pr-0">
          <Card className="mt-3 elevatedCard">
            <div className="justify-content-right topRow">
              <a href="#">
                <IoMdCamera color="#ffffff" className="cameraIcon" size={30} />
              </a>
            </div>
            <Card.Body className="p-0">
              <Card.Img src={require("../../src/coverimg.png")}></Card.Img>
            </Card.Body>
          </Card>
          <Card className="mr-2 ml-2 postStatus">
            <Card.Body className="p-2">
              <div className="smallImgContainer">
                <Image src={props.profile.img} className="roundImg"></Image>
              </div>
              <Form.Group controlId="Form.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  style={{ border: "none", textAlign: "center" }}
                  placeholder="What's in your mind today ..."
                />
              </Form.Group>
              <div className="bottomButtonsContainer">
                <Button variant="outline-light">
                  <IoIosPricetag color="#C2BD20" size={20}></IoIosPricetag> Tag
                  a friend
                </Button>
                <Button variant="outline-light" className="ml-2">
                  <IoMdAttach color="#5015A8" size={20} /> Add an attachement
                </Button>
              </div>
            </Card.Body>
          </Card>

          <div style={{justifyContent:'flex-start',display:'flex'}}>
            <h4 className="mt-3">Posts</h4>
          </div>

{/* all posts would be below here using a map to display content of post object retrived from database */}
          {
              posts.map(post=>{
                  return(
                    <Card className="mt-3 elevatedCard">
                    <Card.Body>
                      <div className="smallImgContainer">
                        <Image src={props.profile.img} className="roundImg"></Image>
                        <div className="postername">
                          {" "}
                  <h5>{props.profile.name}</h5>
                        </div>
                        <div className="time">
                          <IoMdClock />
                          {post.timeOfPost}
                        </div>
                      </div>
                      <Row >
                       {post.contentMedia.length > 0 && <Col md="6" className="pr-0">
                        <Row >
                        {post.contentMedia.map((content,id)=>{
                            return(
                            <>
                            <Col md={3%id == 1?'12':'6'} className="p-1">
                                {content.type==='vid' ? 
                                <video width="100%" height="150" style={{backgroundColor:'#23B10C'}} controls poster="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
                                  <source src={sources.bunnyTrailer} type="video/mp4" />
                                </video>
                                :
                                <Image width="100%" src={content.src} height="150"/>}
                              </Col>
                            </>
                            )
                        })}
                       
                        </Row>
                  </Col> }
                       {post.contentMedia.length > 0 ?
                        <Col md="6" >
                          <p className="text-justify">
                           {
                               !post.contentMedia ? (post.contentText) : 
                                post.contentText.length > 600 ? ( <>
                                    {post.contentText.substr(0,600) + '...'}

                                    <div className="mt-2"><a href='#'>continue reading</a></div>
                                    
                                   </> ):
                                   <>
                                   {post.contentText}
                                   <div><Button variant="success" style={{borderRadius:20}} className="mt-2 tagButton">#FarmerOfTheYear</Button></div>
                                   </>
                           }
                          </p>
                        </Col>
                        :
                        <Col md="12" className="pl-2">
                          <p className="text-justify">
                           {
                                post.contentText.length > 1500 ? (
                                    <>
                                    {post.contentText.substr(0,1500) + '...'}
                                    <div><Button variant="success" style={{borderRadius:20}} className="mt-2 tagButton">#FarmerOfTheYear</Button></div>
                                    
                                   </>
                                    )
                                    :
                                    <>
                                    {post.contentText}
                                    <div><Button variant="success" style={{borderRadius:20}} className="mt-2 tagButton">#FarmerOfTheYear</Button></div>
                                    </>
                           }
                          </p>
                        </Col>
                        }
                      </Row>
                      <div>
                          <div className="actionButtons mt-3">
                  <div><a href="#"><IoIosHeart color="#C51695" size={25}/> likes <span>{post.likes}</span></a> </div>
                  <div><a href="#"><IoMdText color="#8D07CA" size={25}/> comments <span>{post.comments}</span></a> </div>
                  <div><a href="#"><IoMdShare color="#2882E3" size={25}/> share <span>{post.share}</span></a> </div>
                  <AvatarStack style={{right:10}} avatars={avatars}/>
                          </div>
                         
                      </div>
                    </Card.Body>
                  </Card>
                  )
              })
          }
        </Col>
      </Row>
    </>
  );
};

export default CenterPage;
