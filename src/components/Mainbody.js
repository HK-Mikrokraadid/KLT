import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Blogposts from './Blogposts';
import Sidebar from './Sidebar';
import EnterNewPost from "./EnterNewPost";

function Mainbody () {
  return (
    <Container fluid className="m-2">
      <Row>
        <Col sm={8} className="border border-primary">
          <Row>
          <h2 className="m-2 p-2">Hello, my name is Klenis. Trying to formulate and build a life-changing blog here. Better stay tuned!</h2>
          </Row>
          <Row>
            <Blogposts/>
          </Row>
          <Row>
            <EnterNewPost/>
            <Button variant="secondary">Add new post</Button>{' '} 
          </Row>
        </Col>
        <Col sm={4} className='border border-danger'>
          <h1>Sidebar here</h1>
          <Sidebar/>
        </Col>
      </Row>
    </Container>
  );
}

export default Mainbody;