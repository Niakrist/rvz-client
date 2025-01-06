import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/brandAPI";

const initialData = {
  brand: "",
  title: "",
  description: "",
  url: "",
};

const CreateBrand = ({ show, onHide }) => {
  const [data, setData] = useState(initialData);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const addBrand = () => {
    createBrand({
      name: data.brand,
      title: data.title,
      description: data.description,
      url: `/${data.url}`,
    }).then((data) => {
      setData(initialData);
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый стандарт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={data.brand}
            onChange={handleChange}
            name="brand"
            className="mt-2"
            placeholder="Введите название стандарта или бренда"
          />
          <Form.Control
            value={data.title}
            onChange={handleChange}
            name="title"
            className="mt-2"
            placeholder="Введите title"
          />
          <Form.Control
            value={data.description}
            onChange={handleChange}
            name="description"
            className="mt-2"
            placeholder="Введите description"
          />
          <Form.Control
            value={data.url}
            onChange={handleChange}
            name="url"
            className="mt-2"
            placeholder="url"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
