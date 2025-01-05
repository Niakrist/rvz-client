import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { toogleBrand } from "../store/brandsSlice/brandsSlice";
import { toggleLoad } from "../store/loadsSlice/loadsSlice";
import { toogleRolling } from "../store/rollingsSlice/rollingsSlice";
import { toggleRow } from "../store/rowsSlice/rowsSlice";
import { Button } from "react-bootstrap";

const Aside = () => {
  const { brands, checkBrand, isLoadingBrand } = useSelector(
    (state) => state.brands
  );
  const { loads, checkLoad } = useSelector((state) => state.loads);
  const { rollings, checkRolling } = useSelector((state) => state.rollings);
  const { rows, checkRow } = useSelector((state) => state.rows);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(toogleBrand(null));
    dispatch(toogleRolling(null));
    dispatch(toggleLoad(null));
    dispatch(toggleRow(null));
  };

  if (isLoadingBrand) return;

  return (
    <aside>
      <h6>Стандарт</h6>
      <ListGroup className="mb-4">
        {brands.map((brand) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={brand.id === checkBrand?.id}
            onClick={() => dispatch(toogleBrand(brand))}
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
            onClick={() => dispatch(toogleRolling(rolling))}
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
