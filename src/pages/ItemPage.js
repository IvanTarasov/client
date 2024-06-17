
import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneItem, fetchOneProducer, fetchOneType } from '../http/itemApi';

const ItemPage = () => {
    const [item, setItem] = useState({props: []})
    const [type, setType] = useState(0)
    const [producer, setProducer] = useState(0)
    const {id} = useParams()

    useEffect(() => {
        fetchOneItem(id).then(data => {
            setItem(data[0])
            fetchOneType(data[0].typeId).then(data => setType(data))
            fetchOneProducer(data[0].producerId).then(data => setProducer(data))
    })
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={"http://localhost:5000/" + item.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column mr-5 align-items-center">
                        <h2>Название: {item.name}</h2>
                        <br></br>
                        <h3>Категория: {type.name}</h3>
                        <h3>Производитель: {producer.name}, адрес: {producer.address}</h3>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Цена: {item.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {item.props.map((p, index) =>
                    <Row key={p.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {p.title}: {p.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;
