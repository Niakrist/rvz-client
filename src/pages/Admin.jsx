import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/Modals/CreateBrand";
import CreateDevice from "../components/Modals/CreateDevice";
import CreateLoad from "../components/Modals/CreateLoad";
import CreateRolling from "../components/Modals/CreateRolling";
import CreateRow from "../components/Modals/CreateRow";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [LoadVisible, setLoadVisible] = useState(false);
  const [rollingVisible, setRollingVisible] = useState(false);
  const [rowVisible, setRowVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setBrandVisible(true)}
        variant="outline-dark"
        className="mt-4"
      >
        Добавить стандарт
      </Button>
      <Button
        onClick={() => setRollingVisible(true)}
        variant="outline-dark"
        className="mt-4"
      >
        Добавить тело качения
      </Button>
      <Button
        onClick={() => setRowVisible(true)}
        variant="outline-dark"
        className="mt-4"
      >
        Добавить рядность
      </Button>
      <Button
        onClick={() => setLoadVisible(true)}
        variant="outline-dark"
        className="mt-4"
      >
        Добавить вид нагрузки
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant="outline-dark"
        className="mt-4"
      >
        Добавить подшипник
      </Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateLoad show={LoadVisible} onHide={() => setLoadVisible(false)} />
      <CreateRolling
        show={rollingVisible}
        onHide={() => setRollingVisible(false)}
      />
      <CreateRow show={rowVisible} onHide={() => setRowVisible(false)} />
    </Container>
  );
};

export default Admin;
