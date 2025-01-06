import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, toggleBrand } from "../store/brandsSlice/brandsSlice";
import { fetchLoads, toggleLoad } from "../store/loadsSlice/loadsSlice";
import {
  fetchRollings,
  toggleRolling,
} from "../store/rollingsSlice/rollingsSlice";
import { fetchRows, toggleRow } from "../store/rowsSlice/rowsSlice";
import { Button } from "react-bootstrap";

const Aside = () => {
  const { brands, checkBrand, isLoadingBrand } = useSelector(
    (state) => state.brands
  );
  const { loads, checkLoad } = useSelector((state) => state.loads);
  const { rollings, checkRolling } = useSelector((state) => state.rollings);
  const { rows, checkRow } = useSelector((state) => state.rows);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBrands());
  //   dispatch(fetchLoads());
  //   dispatch(fetchRollings());
  //   dispatch(fetchRows());
  // }, [dispatch]);

  const handleRemove = () => {
    dispatch(toggleBrand(null));
    dispatch(toggleRolling(null));
    dispatch(toggleLoad(null));
    dispatch(toggleRow(null));
  };

  if (isLoadingBrand) return;

  if (!brands || !loads || !rollings || !rows) return;

  return (
    <aside>
      <h6>Стандарт</h6>
      <ListGroup className="mb-4">
        {brands.map((brand) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={brand.id === checkBrand?.id}
            onClick={() => dispatch(toggleBrand(brand))}
            key={brand.id}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h6>Тело качения</h6>
      <ListGroup className="mb-4">
        {rollings.map((rolling) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={rolling.id === checkRolling?.id}
            onClick={() => dispatch(toggleRolling(rolling))}
            key={rolling.id}
          >
            {rolling.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h6>Нагрузка</h6>
      <ListGroup className="mb-4">
        {loads.map((load) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={load.id === checkLoad?.id}
            onClick={() => dispatch(toggleLoad(load))}
            key={load.id}
          >
            {load.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h6>Рядность</h6>
      <ListGroup className="mb-4">
        {rows.map((row) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={row.id === checkRow?.id}
            onClick={() => dispatch(toggleRow(row))}
            key={row.id}
          >
            {row.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {(checkBrand || checkLoad || checkRolling || checkRow) && (
        <Button onClick={handleRemove}>Сбросить</Button>
      )}
    </aside>
  );
};

export default Aside;
