import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Doctors = ({ appointments, doctors, setAppointments }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>Our Doctors</h3>
      <hr />

      <Row className="justify-content-center" >
        {doctors.map((doctors) => {
          return (
            <Col className="mt-3" key={doctors.id} xs={6} sm={4} md={3}>
              <img className="img-thumbnail doctor-img" src={doctors.img} alt={doctors.img} onClick={handleShow} />
              <h5 className="mt-2">{doctors.name}</h5>
              <h6>{doctors.dep}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Doctors;
