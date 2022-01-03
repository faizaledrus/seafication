import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Container, Badge } from 'react-bootstrap';
import GetOpenseaTransaction from '../../Services/getOpenseaTransaction/getOpenseaTransaction';


function Feed() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className="text-left"  xs={6}>    
                    <Card body>
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <img 
                                    src="https://lh3.googleusercontent.com/O0Jv-YaqJvVcL-V826l0emhGdqQYk4taC55nlrZdfEqY2fBIPhXvH0iFZM9PtWE_Nrb8c0xT16xvIt-Ab1_XGAbIn1vmhbo35BJ_=w600" 
                                    className="img-fluid shadow-4"
                                    alt=""
                                    width="50px"/>
                                </Col>
                                <Col xs={7}>
                                    Apes in Space #3212<br/>
                                    <Badge pill bg="primary">Primary</Badge>
                                    <Badge pill bg="light" text="dark">0.02ETH</Badge>
                                    <Badge pill bg="secondary">0xf...C92</Badge>
                                </Col >
                                <Col xs={2}>
                                <Badge pill bg="secondary">0xf...C92</Badge>
                                </Col>
                                
                            </Row>
                        </Container>
                    </Card>
                    
                    <Card body border="secondary" mt-n1>
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <img src="https://lh3.googleusercontent.com/O0Jv-YaqJvVcL-V826l0emhGdqQYk4taC55nlrZdfEqY2fBIPhXvH0iFZM9PtWE_Nrb8c0xT16xvIt-Ab1_XGAbIn1vmhbo35BJ_=w600" 
                                    alt=""
                                    width="50px"/>
                                </Col>
                                <Col xs={7}>
                                    Apes in Space #3212<br/>
                                    <Badge pill bg="primary">Primary</Badge>
                                    <Badge pill bg="light" text="dark">0.02ETH</Badge>
                                    <Badge pill bg="secondary">0xf...C92</Badge>
                                    
                                </Col >
                                <Col xs={2}>
                                <Badge pill bg="secondary">0xf...C92</Badge>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        <GetOpenseaTransaction />
  </Container>
    )
}

export default Feed
