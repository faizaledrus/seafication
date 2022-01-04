import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, Container,  Badge, Table, Button} from 'react-bootstrap';
import { BiTrash } from "react-icons/bi"; 
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

import Moralis from "moralis"
/* Moralis init code */
const serverUrl = "https://v0yhdefxxosp.usemoralis.com:2053/server";
const appId = "uXcIcEeqWHQqOZ5DxPTxBs2tEudFzUMgc5LLJlw3";
Moralis.start({ serverUrl, appId });

function AddWallet() { 
    const [data, setdata] = useState()
    //[] {} 3 true false ""



/* TODO: Add Moralis Authentication code */
const getData=async()=>{

    const results = await Moralis.Cloud.run("watchBscAddress", {address: "0x2c9F5c6C275cd01d0b2d2610Aab7668C2F3cC047"})
    return results
}

    const handleOnChange = (e) => {
        setdata(e.target.value)
    }
    useEffect(() => {
        console.log(getData())
        // effect
        // return () => {
        //     cleanup
        // }
    }, [data])
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Button>Save</Button>{' '}
                    <Button variant="secondary">Back</Button>
                    
                </Col>                
            <Col></Col>
        </Row>
    </Container>
    )
}

export default AddWallet
