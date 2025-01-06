import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";
import { fetchDevice } from "../store/deviceSlice/deviceSlice";

const DeviceList = () => {
  const { devices, isLoasdinDevice } = useSelector((state) => state.devices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDevice());
  }, [dispatch]);

  if (isLoasdinDevice) return;

  return (
    <Row className={"d-flex"}>
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
