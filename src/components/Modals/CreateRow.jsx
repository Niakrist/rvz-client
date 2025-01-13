import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncRow } from "../../store/rowsSlice/rowsSlice";

const initialData = {
  row: "",
  title: "",
  description: "",
  url: "",
};
const CreateRow = ({ show, onHide }) => {
  const [data, setData] = useState(initialData);
  const { isLoadingRow } = useSelector((state) => state.rows);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const addRow = () => {
    dispatch(
      createAsyncRow({
        name: data.row,
        title: data.title,
        description: data.description,
        url: `/${data.url}`,
      })
    );
  };

  useEffect(() => {
    if (!isLoadingRow) {
      setData(initialData);
      onHide();
    }
  }, [isLoadingRow]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое количетсво рядности
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            name="row"
            value={data.row}
            onChange={handleChange}
            placeholder="Введите количество рядности"
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
        <Button variant="outline-success" onClick={addRow}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRow;
