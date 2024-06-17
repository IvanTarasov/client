
import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { createProducer } from '../../http/itemApi';

const CreateProducer = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const addProducer = () => {
        createProducer({name: name, address: address}).then(data => {
            setName('')
            setAddress('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить производителя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название производителя"}
                    />
                    <Form.Control
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className='mt-3'
                        placeholder={"Введите адрес производителя"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addProducer}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProducer;
