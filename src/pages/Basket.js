import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import Item from "../components/Item";
import { fetchItems, fetchTypes, fetchProducers } from '../http/itemApi';

const Basket = observer(() => {
    const {item} = useContext(Context)
    const [sum, setSum] = useState(0)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchProducers().then(data => item.setProducers(data))
        fetchItems(null, null, 1, 24).then(data => {
            item.setItems(data.rows)
        })
    }, [])

    const countSum = () => {
        let s = 0
        item.items.map(item => s += item.price)
        setSum(s)
    }

    return (
        <Container className="mt-3">
        <Row className="d-flex">
            {item.items.map(item =>
                <Item key={item.id} item={item}/>
            )}
        </Row>
        <Row className='mt-5 align-items-center'>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    <h2>Сумма корзины: {sum}</h2>
                    <Button variant={"outline-dark"} onClick={countSum}>Оформить заказ</Button>
                </Card>
            </Col>
        </Row>
    </Container>
    );
});

export default Basket