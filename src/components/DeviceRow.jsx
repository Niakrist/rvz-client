import React from "react";
import { useDispatch } from "react-redux";
import { asyncRemoveDevice } from "../store/deviceSlice/deviceSlice";

const DeviceRow = ({ device }) => {
  const dispatch = useDispatch();

  const {
    id,
    url,
    name,
    title,
    description,
    price,
    rating,
    img,
    brandId,
    rollingId,
    rowId,
    loadId,
  } = device;
  return (
    <tr>
      <td>{id}</td>
      <td>{url}</td>
      <td>{name}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{img}</td>
      <td>{brandId}</td>
      <td>{rollingId}</td>
      <td>{rowId}</td>
      <td>{loadId}</td>
      <td>
        <button onClick={() => dispatch(asyncRemoveDevice(id))}>Удалить</button>
      </td>
    </tr>
  );
};

export default DeviceRow;
