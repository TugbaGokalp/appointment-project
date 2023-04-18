import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Doctors = ({ appointments, doctors, setAppointments }) => {
  return (
    <Container>
      <h3>Our Doctors</h3>

      <Row className="gap-2 rounded-2">
        {doctors.map((doctors) => {
          return (
            <Col>
              <img className="img-thumbnail doctor-img" src={doctors.img} alt={doctors.img} />
              <h5>{doctors.name}</h5>
              <h6>{doctors.dep}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Doctors;
