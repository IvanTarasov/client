import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { fetchTypes, fetchProducers, createItem } from '../../http/itemApi';

const CreateItem = observer(({show, onHide}) => {
    const {item} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [property, setProperty] = useState([])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchProducers().then(data => item.setProducers(data))
    }, [])

    const addProperty = () => {
        setProperty([...property, {title: '', description: '', number: Date.now()}])
    }
    const removeProperty = (number) => {
        setProperty(property.filter(p => p.number !== number))
    }
    const changeProperty = (key, value, number) => {
        setProperty(property.map(p => p.number === number ? {...p, [key]: value} : p))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', item.selectedType.id)
        formData.append('producerId', item.selectedProducer.id)
        formData.append('props', JSON.stringify(property))
        
        createItem(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{item.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => item.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{item.selectedProducer.name || "Выберите производителя"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.producers.map(producer =>
                                <Dropdown.Item
                                    onClick={() => item.setSelectedProducer(producer)}
                                    key={producer.id}
                                >
                                    {producer.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Название"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Цена"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addProperty}
                    >
                        Добавить новое свойство
                    </Button>
                    {property.map(p =>
                        <Row className="mt-4" key={p.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={p.title}
                                    onChange={(e) => changeProperty('title', e.target.value, p.number)}
                                    placeholder="Название"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={p.description}
                                    onChange={(e) => changeProperty('description', e.target.value, p.number)}
                                    placeholder="Описание"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeProperty(p.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addItem}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateItem;