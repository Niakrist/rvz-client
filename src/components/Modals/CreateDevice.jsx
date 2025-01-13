import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../store/brandsSlice/brandsSlice";
import { toggleLoad } from "../../store/loadsSlice/loadsSlice";
import { toggleRolling } from "../../store/rollingsSlice/rollingsSlice";
import { toggleRow } from "../../store/rowsSlice/rowsSlice";
import { createDevice } from "../../http/device";

const initialData = {
  name: "",
  price: 0,
  title: "",
  description: "",
  url: "",
};

const CreateDevice = ({ show, onHide }) => {
  const [data, setData] = useState(initialData);
  const [info, setInfo] = useState([]);
  const [file, setFile] = useState(null);

  const { brands, checkBrand } = useSelector((state) => state.brands);
  const { loads, checkLoad } = useSelector((state) => state.loads);
  const { rollings, checkRolling } = useSelector((state) => state.rollings);
  const { rows, checkRow } = useSelector((state) => state.rows);

  const dispatch = useDispatch();

  const addInfo = () => {
    setInfo([...info, { id: Date.now(), title: "", description: "" }]);
  };

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const removeInfo = (id) => {
    setInfo(info.filter((item) => item.id !== id));
  };

  const changeInfo = (key, value, id) => {
    setInfo(info.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const selectFile = ({ target }) => {
    setFile(target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("url", `/${data.url}`);
    formData.append("img", file);

    formData.append("brandId", checkBrand.id);
    formData.append("loadId", checkLoad.id);
    formData.append("rollingId", checkRolling.id);
    formData.append("rowId", checkRow.id);

    formData.append("info", JSON.stringify(info));

    // console.log("formData: ", formData);

    createDevice(formData).then((data) => onHide());
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
            <Dropdown.Toggle>
              {checkBrand?.name || "Выберете стандарт"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => dispatch(toggleBrand(brand))}
                  key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {checkLoad?.name || "Выберете нагрузку"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {loads.map((load) => (
                <Dropdown.Item
                  onClick={() => dispatch(toggleLoad(load))}
                  key={load.id}>
                  {load.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {checkRolling?.name || "Выберете тело качения"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {rollings.map((rolling) => (
                <Dropdown.Item
                  onClick={() => dispatch(toggleRolling(rolling))}
                  key={rolling.id}>
                  {rolling.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {checkRow?.name || "Выберете рядность"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {rows.map((row) => (
                <Dropdown.Item
                  onClick={() => dispatch(toggleRow(row))}
                  key={row.id}>
                  {row.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            name="name"
            value={data.name}
            onChange={handleChange}
            className="mt-2"
            placeholder="Название подшипника"
          />
          <Form.Control
            value={data.price}
            onChange={handleChange}
            name="price"
            type="number"
            className="mt-2"
            placeholder="Введите стоимость подшипника"
          />
          <Form.Control
            value={data.title}
            onChange={handleChange}
            name="title"
            className="mt-2"
            placeholder="title"
          />
          <Form.Control
            value={data.description}
            onChange={handleChange}
            name="description"
            className="mt-2"
            placeholder="description"
          />
          <Form.Control
            value={data.url}
            onChange={handleChange}
            name="url"
            className="mt-2"
            placeholder="url"
          />
          <Form.Control
            onChange={selectFile}
            name="file"
            type="file"
            className="mt-2"
          />
          <hr />
        </Form>

        <Button onClick={addInfo} variant="outline-dark">
          Добавить характеристики
        </Button>

        {info.map((item) => (
          <Row className="mt-2" key={item.id}>
            <Col md={5}>
              <Form.Control
                value={item.title}
                onChange={(e) => changeInfo("title", e.target.value, item.id)}
                placeholder="Введите название характеристики"
              />
            </Col>
            <Col md={5}>
              <Form.Control
                value={item.description}
                onChange={(e) =>
                  changeInfo("description", e.target.value, item.id)
                }
                placeholder="Введите описание характеристики"
              />
            </Col>
            <Col md={2}>
              <Button
                onClick={() => removeInfo(item.id)}
                variant="outline-danger">
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
        <Button variant="outline-success" onClick={addDevice}>
          Добавить новый подшипник
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
