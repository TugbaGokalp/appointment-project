import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, handleClose, drName }) {
  return (
    <>
      <Modal show={show} handleClose={handleClose}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>Appointment for <span className="text-danger">{drName}</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                
              />
            </Form.Group>

            
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
          <Button onClick={handleClose} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
