import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Container, Badge, Table, Button } from 'react-bootstrap';
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEthers } from '@usedapp/core';
import axios from 'axios';
// import { useEffect } from 'react';


function AddWallet() {
    const { activateBrowserWallet, account } = useEthers();
    const [data, setdata] = useState({
        address: account,
        wallet: "", name: ""
    })
    //[] {} 3 true false ""




    const handleOnChange = (e) => {
        e.preventDefault()
        return setdata({
            ...data,
            wallet: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
     
        axios.post("http://localhost:5000/addwallet", {
            address: account,
            wallet: {
                wallet: data.wallet,
                name: data.name
            }

        }).then(res => {
            console.log("masuk", res)
            setdata({
                name: ""
                ,
                wallet: ""

            })

        }).catch(err => {
            console.log(err)
            setdata({
                name: ""
                ,
                wallet: ""

            })
            throw err;
        })
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={4} >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Wallet address</Form.Label>
                            <Form.Control type="text" placeholder="00x....C072" value={data.wallet} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setdata({ ...data, name: e.target.value })} />
                        </Form.Group>
                        <div>


                            <Button type='submit' >Save</Button>{' '}
                            <Button variant="secondary">Back</Button>
                        </div>
                    </Form>


                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default AddWallet
