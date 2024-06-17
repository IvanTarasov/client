
import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const Item = ({item}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"} onClick={() => navigate("/item/" + item.id)}>
                <Image width={150} height={150} src={"http://localhost:5000/" + item.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Цена: {item.price} руб.</div>
                </div>
                <div>Название: {item.name}</div>
            </Card>
        </Col>
    );
};

export default Item;
