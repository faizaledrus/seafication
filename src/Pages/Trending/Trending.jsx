import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Container, Badge, Table } from 'react-bootstrap';
import { BiTrash } from "react-icons/bi";

function Trending() {
    return (
        <>
        <div class="px-3 py-2 border-bottom mb-3 justify-content-center" align="center">
                       Top - Trending - Discover
                        
            </div>
            
        <Container>
        <Table striped hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Collection</th>
                                    <th>FLOOR</th>
                                    <th>Average</th>
                                    <th>Volume</th>
                                    <th>Sales</th>
                                    <th>Market Cap</th>
                                    <th>7D Volume</th>
                                </tr>
                            </thead>
                            <tbody>                               
                                <tr>
                                    <td>data 1</td>
                                    <td>data 2</td>
                                    <td>data 3</td>
                                    <td>data 4</td>
                                    <td>data 5</td>
                                    <td>data 6</td>
                                    <td>data 7</td>
                                </tr>
                        
                                       
                            </tbody>
                        </Table>
  </Container>
  </>
    )
}

export default Trending
