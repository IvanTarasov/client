import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import ItemList from "../components/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { fetchItems, fetchTypes, fetchProducers } from '../http/itemApi';

const Shop = observer(() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchProducers().then(data => item.setProducers(data))
        fetchItems(null, null, 1, 24).then(data => {
            item.setItems(data.rows)
        })
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <ItemList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;