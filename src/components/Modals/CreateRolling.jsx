import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateRolling = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый вид тел качения
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Введите название тела качения" />
          <Form.Control className="mt-2" placeholder="Введите title" />
          <Form.Control className="mt-2" placeholder="Введите description" />
          <Form.Control className="mt-2" placeholder="url" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRolling;
