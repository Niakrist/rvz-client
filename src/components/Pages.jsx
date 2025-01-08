import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/deviceSlice/deviceSlice";

const Pages = () => {
  const { page, count, limit } = useSelector((state) => state.devices);
  const dispatch = useDispatch();
  const pageCount = Math.ceil(count / limit);

  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((p) => (
        <Pagination.Item
          onClick={() => dispatch(setPage(p))}
          active={p === page}
          key={p}
        >
          {p}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
