import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.css'

import { Link } from "react-router-dom";

import { Button, Container,Navbar,Nav, Form,FormControl,NavDropdown } from 'react-bootstrap';
import { BiHomeAlt, BiSliderAlt, BiNews, BiWalletAlt, BiStats, BiTrendingUp } from "react-icons/bi";

// import { useEthers } from "@usedapp/core";
import axios from 'axios';


import { useEthers } from '@usedapp/core'

function TopBar() {

    const { activateBrowserWallet, account } = useEthers();
    const [isLoggedin, setisLoggedin] = useState(false);

    useEffect(() => {
        if (typeof account !== "undefined" && account.length > 0) {

            axios.post("http://localhost:5000/create-user", {
                address: account
            }).then(res => {
                console.log(res,"ini ")
                if (res.status) {
                    setisLoggedin(true)
                }
            }).catch(err => {
                console.log(err)
                setisLoggedin(false)
                throw err;
            })


        } else {
            setisLoggedin(false)
        }
        return () => {
            // cleanup
        }
    }, [account])



    function handleConnectWallet() {
        // console.log(process.env.API_HOST)

        const res = activateBrowserWallet();
    }

    return (
        <>
            <header>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">DOCIAL.COM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 justify-content-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#"><Link to="/"><BiNews class="bi d-block fs-2" /></Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/trending"><BiStats class="bi d-block fs-2" /></Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/manage"><BiWalletAlt class="bi d-block fs-2" /></Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/settings"><BiSliderAlt class="bi d-block fs-2" /></Link></Nav.Link>
                       
                    </Nav>
                            {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                            {'  '}
                            {/* if is not loggedin maka && mauapa  */}
                            {!isLoggedin && <Button variant="btn btn-primary" onClick={handleConnectWallet}>Connect Wallet</Button>}
                            {/* if is not loggedin maka ? mauapa :(else) isinya apa  */}

                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>

               
            </header>

            <div className="mb-4">
                <br/>
            </div>

          


        </>

    )
}

export default TopBar
