import React from "react";
import NaviBar from "./NavBar";
import { Row, Image } from "react-bootstrap";

function Footer () {
  return (
    <>
      <Row>
      <NaviBar/>
      </Row>
      <Row className='text-middle'>
      <Image src="https://www.upload.ee/image/16720994/footerpic.jpg" fluid />
      </Row>
      <Row>
        <h6 className="text-center">There is absolutely no Copyright content on this page. Period! 2024 Klenis</h6>
      </Row>
       
    </>
  );
}

export default Footer;