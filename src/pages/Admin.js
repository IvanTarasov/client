
import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProducer from "../components/modals/CreateProducer";
import CreateItem from "../components/modals/CreateItem";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [producerVisible, setProducerVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProducerVisible(true)}
            >
                Добавить производителя
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setItemVisible(true)}
            >
                Добавить товар
            </Button>
            <CreateProducer show={producerVisible} onHide={() => setProducerVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
