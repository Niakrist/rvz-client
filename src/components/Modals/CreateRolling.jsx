import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRolling } from "../../store/rollingsSlice/rollingsSlice";

const initialData = {
  rolling: "",
  title: "",
  description: "",
  url: "",
};
const CreateRolling = ({ show, onHide }) => {
  const [data, setData] = useState(initialData);
  const { isLoadingRolling } = useSelector((state) => state.rollings);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const addRolling = () => {
    dispatch(
      createRolling({
        name: data.rolling,
        title: data.title,
        description: data.description,
        url: `/${data.url}`,
      })
    );
  };

  useEffect(() => {
    if (!isLoadingRolling) {
      setData(initialData);
      onHide();
    }
  }, [isLoadingRolling]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый вид тел качения
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            name="rolling"
            value={data.rolling}
            onChange={handleChange}
            placeholder="Введите название тела качения"
          />
          <Form.Control
            name="title"
            value={data.title}
            onChange={handleChange}
            className="mt-2"
            placeholder="Введите title"
          />
          <Form.Control
            name="description"
            value={data.description}
            onChange={handleChange}
            className="mt-2"
            placeholder="Введите description"
          />
          <Form.Control
            name="url"
            value={data.url}
            onChange={handleChange}
            className="mt-2"
            placeholder="url"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addRolling}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRolling;
