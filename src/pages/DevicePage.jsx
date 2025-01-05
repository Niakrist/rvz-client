import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import starSrc from "../assets/star.png";

const DevicePage = () => {
  const { user } = useSelector((state) => state.user);

  const device = {
    id: 13,
    name: "Подшипник 3506",
    price: "310",
    rating: 0,
    title: "Подшипник 3506: Купить в Санкт-Петербурге",
    description: "Купить подшипник ГОСТ 3506 в Санкт-Петербурге",
    url: "/gost-3506",
    img: "3ff2e1e9-1d05-4ffe-b7b3-a2fe08366234.jpg",
  };

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

  console.log("user: ", user);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={`http://localhost:5000/${device.img}`}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex align-items-center">
            <h2>{device.name}</h2>
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
              {device.rating}
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
            <h3>От: {device.price} руб.</h3>
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
