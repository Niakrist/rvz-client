import React from "react";
import { Col, Container } from "react-bootstrap";
import Aside from "../components/Aside";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Container>
      <div className="d-flex mt-4">
        <Col className="mx-3" md={3}>
          <Aside />
        </Col>
        <Col md={9}>
          <DeviceList />
        </Col>
      </div>
    </Container>
  );
};

export default Shop;
