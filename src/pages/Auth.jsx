import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import {
  NavLink,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../constants/routesConctants";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log("locationL ", location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите email..." />
          <Form.Control className="mt-3" placeholder="Введите пароль..." />
          <div className="d-flex justify-content-between mt-3 align-items-center">
            {isLogin ? (
              <>
                <div>
                  Нет акккаунта?{" "}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                </div>{" "}
                <Button variant="outline-success">Войти</Button>
              </>
            ) : (
              <>
                <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                </div>{" "}
                <Button variant="outline-success">Зарегистрироватсья</Button>
              </>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
