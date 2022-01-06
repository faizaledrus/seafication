import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Container, Badge } from 'react-bootstrap';
import GetOpenseaTransaction from '../../Services/getOpenseaTransaction/getOpenseaTransaction';


function Feed() {
    return (
        <>
        <div class="px-3 py-2 border-bottom mb-3 justify-content-center" align="center">
                    My Feed - Global Feed
                    
         </div>
        <Container>
            <Row>
                <Col xs={12} md={8}>
                <Container>
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-4"><img class="card-img" src="https://lh3.googleusercontent.com/O0Jv-YaqJvVcL-V826l0emhGdqQYk4taC55nlrZdfEqY2fBIPhXvH0iFZM9PtWE_Nrb8c0xT16xvIt-Ab1_XGAbIn1vmhbo35BJ_=w600" alt=""/></div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Apes in Space #3212</h5>
                                    <Badge pill bg="primary">Primary</Badge>
                                    <Badge pill bg="warning" text="dark">0.02ETH</Badge>
                                    <Badge pill bg="info">0xf...C92</Badge>
                                    <Badge pill bg="success">0xf...C92</Badge>

                                    <p class="card-text">This is a wider card with  content. This content is a little bit longer. 
                                        <br/>
                                        <small class="text-medium-emphasis">Last updated 3 mins ago</small>
                                    </p>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </Container>

                    <br />
                        <Container >
                        <div class="col" >
                            <div class="card h-100" ><img class="card-img-top" src="https://lh3.googleusercontent.com/O0Jv-YaqJvVcL-V826l0emhGdqQYk4taC55nlrZdfEqY2fBIPhXvH0iFZM9PtWE_Nrb8c0xT16xvIt-Ab1_XGAbIn1vmhbo35BJ_=w600" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Apes in Space #3212</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-medium-emphasis">Last updated 3 mins ago</small>{' '}
                                    <Badge pill bg="primary">Primary</Badge>
                                    <Badge pill bg="warning" text="dark">0.02ETH</Badge>
                                    <Badge pill bg="info">0xf...C92</Badge>
                                    <Badge pill bg="success">0xf...C92</Badge>
                                </div>
                            </div>
                        </div>
                        </Container>
                </Col>
                <Col xs={6} md={4}>
                Something here...
                </Col>
            </Row>
                                       
                       
                       
                    
                
                
            
        <GetOpenseaTransaction />
  </Container>
  </>
    )
}

export default Feed
