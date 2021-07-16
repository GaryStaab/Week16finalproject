import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

function TransferUpdate(props) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(props.data);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };
    const handleChange = (e) => {
        let screenValue = e.target.value;
        let screenInt = Number.parseInt(screenValue);
        if (!Number.isNaN(screenInt)) {
            screenValue = screenInt;
        }
        setData({ ...data, [e.target.id]: screenValue });
    }
    const handleCloseSave = () => {
        setShow(false);
        props.updateTransaction(props.id, data);
    };

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Update Transfer transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col xs="4"><Form.Label size="sm" >From Loc:</Form.Label></Col>
                                <Col xs="8"><Form.Control type="text" value={data.fromLocation} placeholder="From Location" id="fromLocation" onChange={handleChange} size="sm" /></Col>
                            </Row>
                            <Row>
                                <Col xs="4"><Form.Label size="sm" >Item:</Form.Label></Col>
                                <Col xs="8"><Form.Control type="text" value={data.item} placeholder="Item" id="item" onChange={handleChange} size="sm" /></Col>
                            </Row>
                            <Row>
                                <Col xs="4"><Form.Label size="sm" >To Loc:</Form.Label></Col>
                                <Col xs="8"><Form.Control type="text" value={data.toLocation} placeholder="To Location" id="toLocation" onChange={handleChange} size="sm" /></Col>
                            </Row>
                            <Row>
                                <Col xs="4"><Form.Label size="sm" >Quantity:</Form.Label></Col>
                                <Col xs="8"><Form.Control type="numeric" value={data.quantity} placeholder="Qty" id="quantity" onChange={handleChange} size="sm" /></Col>
                            </Row>
                            {/* <Form.Row>
                                <Col>
                                    <Form.Label column>From Location:</Form.Label>
                                    <Form.Control type="text" value={data.fromLocation} placeholder="From Location" id="fromLocation" onChange={handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Label column>Item:</Form.Label>
                                    <Form.Control type="text" value={data.item} placeholder="Item" id="item" onChange={handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Label column>To Location:</Form.Label>
                                    <Form.Control type="text" value={data.toLocation} placeholder="To Location" id="toLocation" onChange={handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Label column>Quantity:</Form.Label>
                                    <Form.Control type="numeric" value={data.quantity} placeholder="Qty" id="quantity" onChange={handleChange}/>
                                </Col>
                            </Form.Row> */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TransferUpdate;