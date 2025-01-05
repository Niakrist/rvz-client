import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../constants/routesConctants";
import Button from "react-bootstrap/Button";
import { toggleAuth } from "../store/userSlice/userSlice";

const NavBar = () => {
  const { user, isAuth } = useSelector((state) => state.user);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(toggleAuth(value));
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "#fff" }} to={SHOP_ROUTE}>
          РВЗ
        </NavLink>

        {isAuth ? (
          <Nav style={{ color: "#fff" }} className="mr-auto">
            <Button
              onClick={() => history.push(ADMIN_ROUTE)}
              className="mx-2"
              variant="outline-light"
            >
              Админ панель
            </Button>
            <Button
              onClick={() => history.push(LOGIN_ROUTE)}
              variant="outline-light"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "#fff" }} className="mr-auto">
            <Button onClick={() => handleClick(true)} variant="outline-light">
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
