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

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

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
