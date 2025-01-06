import React, { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import starSrc from "../assets/star.png";
import { fetchDeviceItem } from "../store/deviceItemSlice/deviceItemSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DevicePage = () => {
  // const { user } = useSelector((state) => state.user);

  const { deviceItem } = useSelector((state) => state.deviceItem);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeviceItem(params.url));
  }, [dispatch]);

  const description = [
    { id: 1, title: "Внутренний диаметр (d), мм10", description: "10" },
    { id: 2, title: "Наружный диаметр (D), мм", description: "22" },
    { id: 3, title: "Ширина (B), мм", description: "6" },
    { id: 4, title: "Масса, кг: ", description: "0,009" },
    { id: 5, title: "Динамическая нагрузка, Н", description: "1950" },
    { id: 6, title: "Статическая нагрузка, Н", description: "750" },
    { id: 7, title: "Скорость в масле, об/мин", description: "30000" },
    { id: 8, title: "Скорость в смазке, об/мин", description: "36000" },
    { id: 9, title: "Тело качения", description: "шариковый" },
    { id: 10, title: "Упорность", description: "радиальный" },
    { id: 11, title: "Рядность", description: "однорядный" },
    { id: 12, title: "Конструкция", description: "открытый" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={`http://localhost:5000/${deviceItem.img}`}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex align-items-center">
            <h2>{deviceItem.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${starSrc}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 48,
              }}
            >
              {deviceItem.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {deviceItem.price} руб.</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Технические характеристики</h2>
        {description.map((info, index) => (
          <Row
            style={{
              backgroundColor: index % 2 === 0 ? "lightgray" : "white",
              padding: 10,
            }}
            key={info.id}
          >
            {info.title} :{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
