import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import {
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../constants/routesConctants";
import { login, registration } from "../http/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { addUser, toggleAuth } from "../store/userSlice/userSlice";

const Auth = () => {
  const user = useSelector((state) => state.user);
  const dispath = useDispatch();

  const location = useLocation();
  const history = useHistory();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data = null;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      dispath(addUser(data));
      dispath(toggleAuth(true));
      history.push(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введите email..."
          />
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Введите пароль..."
          />
          <div className="d-flex justify-content-between mt-3 align-items-center">
            {isLogin ? (
              <>
                <div>
                  Нет акккаунта?{" "}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                </div>{" "}
                <Button onClick={click} variant="outline-success">
                  Войти
                </Button>
              </>
            ) : (
              <>
                <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                </div>{" "}
                <Button onClick={click} variant="outline-success">
                  Зарегистрироватсья
                </Button>
              </>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
