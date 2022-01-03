import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Modal, Col, Row, Container,  Badge, Table, Button} from 'react-bootstrap';
import { BiTrash } from "react-icons/bi"; 



function Manage() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                Wallet Address
                </Form.Label>
                <Col sm="8">
                <Form.Control placeholder="Wallet Address"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                Password
                </Form.Label>
                <Col sm="8">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        
        <Container>
        <div className="d-grid gap-2" xs={8}>
        <Button size="lg"  onClick={handleShow}>Add New Alert</Button>
        </div>
            <Row>
            <Col></Col>
                <Col xs={8} >
                <Card>
                    <Table striped  hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ALERT NAME</th>
                        <th>Address</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Badge>
                                <BiTrash/>
                            </Badge>
                            <img  src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg" height="15px"alt=""></img>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td></td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Card>
                </Col>
            <Col></Col>
            </Row>
        </Container>
        </>
    )
}

export default Manage
