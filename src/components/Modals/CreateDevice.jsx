import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CreateDevice = ({ show, onHide }) => {
  const { brands } = useSelector((state) => state.brands);
  const { loads } = useSelector((state) => state.loads);
  const { rollings } = useSelector((state) => state.rollings);
  const { rows } = useSelector((state) => state.rows);

  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { id: Date.now(), title: "", description: "" }]);
  };

  console.log("info: ", info);

  const removeInfo = (id) => {
    console.log("id: ", id);
    setInfo(info.filter((item) => item.id !== id));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый подшипник
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Выберете стандарт</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Выберете нагрузку</Dropdown.Toggle>
            <Dropdown.Menu>
              {loads.map((load) => (
                <Dropdown.Item key={load.id}>{load.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Выберете тело качения</Dropdown.Toggle>
            <Dropdown.Menu>
              {rollings.map((rolling) => (
                <Dropdown.Item key={rolling.id}>{rolling.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Выберете тело качения</Dropdown.Toggle>
            <Dropdown.Menu>
              {rows.map((row) => (
                <Dropdown.Item key={row.id}>{row.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-2" placeholder="Название подшипника" />
          <Form.Control
            type="number"
            className="mt-2"
            placeholder="Введите стоимость подшипника"
          />
          <Form.Control className="mt-2" placeholder="title" />
          <Form.Control className="mt-2" placeholder="description" />
          <Form.Control className="mt-2" placeholder="url" />
          <Form.Control type="file" className="mt-2" />
          <hr />
        </Form>

        <Button onClick={addInfo} variant="outline-dark">
          Добавить характеристики
        </Button>

        {info.map((item) => (
          <Row className="mt-2" key={item.id}>
            <Col md={5}>
              <Form.Control placeholder="Введите название характеристики" />
            </Col>
            <Col md={5}>
              <Form.Control placeholder="Введите описание характеристики" />
            </Col>
            <Col md={2}>
              <Button
                onClick={() => removeInfo(item.id)}
                variant="outline-danger"
              >
                Удалить
              </Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить новый подшипник
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
