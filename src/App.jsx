import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { addUser, toggleAuth } from "./store/userSlice/userSlice";
import { Spinner } from "react-bootstrap";
import { fetchBrands } from "./store/brandsSlice/brandsSlice";
import { fetchRollings } from "./store/rollingsSlice/rollingsSlice";
import { fetchRows } from "./store/rowsSlice/rowsSlice";
import { fetchLoads } from "./store/loadsSlice/loadsSlice";
import { fetchDevice } from "./store/deviceSlice/deviceSlice";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.devices);
  const { checkBrand } = useSelector((state) => state.brands);
  const { checkRolling } = useSelector((state) => state.rollings);
  const { checkLoad } = useSelector((state) => state.loads);
  const { checkRow } = useSelector((state) => state.rows);

  const [loading, setLoading] = useState(true);

  console.log("checkBrand: ", checkBrand);

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(addUser(user));
        dispatch(toggleAuth(true));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchLoads());
    dispatch(fetchRollings());
    dispatch(fetchRows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchDevice({
        brandId: checkBrand?.id,
        rollingId: checkRolling?.id,
        loadId: checkLoad?.id,
        rowId: checkRow?.id,
        page: page,
        limit: 16,
      })
    );
  }, [dispatch, checkBrand, checkRolling, checkLoad, checkRow, page]);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
