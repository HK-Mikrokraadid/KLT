import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import NaviBar from "./NavBar";

function Header() {
  return (
    <>
      <Row className='bg-danger-subtle'>
        <Col className="text-end">
          <Image src="https://www.upload.ee/image/16720920/easywayhardway.jpg" fluid />
        </Col>
        <Col  className='text-start'>
          <h3>Easy, Simple life blog</h3>
        </Col>
      </Row>
      <Row>
      <NaviBar/>
      </Row>
    </>
  );
}

export default Header;