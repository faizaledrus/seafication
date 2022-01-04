import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, Container,  Badge, Table, Button} from 'react-bootstrap';
import { BiTrash } from "react-icons/bi"; 
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

/* Moralis init code */


function AddWallet() { 
    // const [data, setdata] = useState()
    // //[] {} 3 true false ""



    const handleOnChange = (e) => {
        //setdata(e.target.value)
        return "kodok";
    }
    // useEffect(() => {
    //     console.log(getData())
    //     // effect
    //     // return () => {
    //     //     cleanup
    //     // }

    // }, [data])

    const handleWallet=(e)=>{
        console.log(e)
    }

    return (
        <Container>
            <Row>
            <Col></Col>
                <Col xs={4} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Wallet address</Form.Label>
                            <Form.Control type="text" placeholder="00x....C072" onChange={handleOnChange}/>
                        </Form.Group>
                        
                    </Form>
                    <Button onClick={handleWallet}>Save</Button>{' '}
                    <Button variant="secondary">Back</Button>
                    
                </Col>                
            <Col></Col>
        </Row>
    </Container>
    )
}

export default AddWallet
