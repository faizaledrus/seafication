import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container, Badge, Table, Button } from 'react-bootstrap';
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEthers } from '@usedapp/core';


function Manage() {
    const { activateBrowserWallet, account } = useEthers();
    // let fetch = useRef(false).current
    const [data, setdata] = useState([])
   
    const getData = () => {
        console.log(account,"ahashah")
        
        axios.get(`http://localhost:5000/getwallet?id=${account}`).then(res => {
           console.log(res.data.wallet)
           setdata(res.data.wallet)
        })
     
    }
    useLayoutEffect(() => {
        getData()
        console.log(data, "ini data")

        return () => {
            setdata([])
      
            // cleanup
        }
    }, [account])

    return (
        <>      
         
        <div class="px-3 py-2 border-bottom mb-3 justify-content-center" align="center">
            <Link to="/manage/wallet">Add Wallet</Link>   -
            <Link to="/manage/project">Add Project</Link>                        
        </div>
        <Container>
        <div >
        </div>
            <Row>
                <Col></Col>
                <Col xs={8} >
                    
                    <Card>
                        <Table striped hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ALERT NAME</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    typeof data!=="undefined" &&
                                    data.map((item, index) => {
                                        return (
                                            <>

                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.wallet}</td>
                                                    <td>
                                                        <Badge>
                                                            <BiTrash />
                                                        </Badge>
                                                        <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg" height="15px" alt=""></img>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
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
