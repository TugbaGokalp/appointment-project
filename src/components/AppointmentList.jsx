import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) => {
        return item.id === id ? { ...item, consulted: !item.consulted } : item;
      })
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appointment List</h3>

      <div type="button" className="d-flex flex-column align-items-center">
        {!appointments.length && (
          <img src="./img/appointment.jpg" width="50%" alt="appointment-img" />
        )}

        {appointments.map((item) => {
          const { id, patient, consulted, doctor, day } = item;
          return (
            <div
              key={id}
              className={consulted ? "appointments consulted" : "appointments"}
              onDoubleClick={() => {
                handleDoubleClick(id);
              }}
            >
              <Row className="justify-content-center align-items-center g-3">
                <Col xs={12} sm={12} md={6}>
                  <h4 className="text-danger">{patient}</h4>
                  <h5>{doctor}</h5>
                </Col>
                <Col>
                  <h5>Date: {new Date(day).toLocaleDateString()}</h5>
                  <h6>Time: {new Date(day).toLocaleTimeString()}</h6>
                </Col>
                <Col xs={2} sm={4} md={1} className="text-end">
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(id)}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
