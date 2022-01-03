import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Container,  Badge, Table} from 'react-bootstrap';
import { BiTrash } from "react-icons/bi"; 



function Manage() {
    

    return (
        <Container>
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
    )
}

export default Manage
