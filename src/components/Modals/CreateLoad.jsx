import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncLoad } from "../../store/loadsSlice/loadsSlice";

const initialData = {
  load: "",
  title: "",
  description: "",
  url: "",
};

const CreateLoad = ({ show, onHide }) => {
  const [data, setData] = useState(initialData);
  const { isLoadingLoad } = useSelector((state) => state.loads);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const addLoad = () => {
    dispatch(
      createAsyncLoad({
        name: data.load,
        title: data.title,
        description: data.description,
        url: `/${data.url}`,
      })
    );
  };

  useEffect(() => {
    if (!isLoadingLoad) {
      setData(initialData);
      onHide();
    }
  }, [isLoadingLoad]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип нагрузки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            name="load"
            value={data.load}
            onChange={handleChange}
            placeholder="Введите название нагрузки"
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
        <Button variant="outline-success" onClick={addLoad}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateLoad;
