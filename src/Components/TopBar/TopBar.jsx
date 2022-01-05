import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.css'

import { Link } from "react-router-dom";

import { Button, Container } from 'react-bootstrap';
import { BiHomeAlt, BiCode, BiCoinStack, BiWater, BiCloudUpload } from "react-icons/bi";

import { useEthers } from "@usedapp/core";
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
                <div class="px-3 py-2 bg-dark text-white">
                    <Container>
                        <div class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <div class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <BiWater class="bi d-block mx-auto mb-1" />SeaFication

                            </div>

                            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li class="nav-link text-white">
                                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                    <BiHomeAlt class="bi d-block mx-auto mb-1" /><Link to="/">Feed</Link>
                                </li>
                                <li class="nav-link text-white">
                                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                    <BiCloudUpload class="bi d-block mx-auto mb-1" /><Link to="/trending">Trending</Link>
                                </li>
                                <li class="nav-link text-white">
                                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                    <BiCoinStack class="bi d-block mx-auto mb-1" /><Link to="/manage">Manage</Link>
                                </li>
                                <li class="nav-link text-white">
                                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                    <BiCode class="bi d-block mx-auto mb-1" />Settings
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div class="px-3 py-2 border-bottom mb-3">
                    <div class="container d-flex flex-wrap justify-content-center">
                        <div class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            Breadcrumb here
                        </div>

                        <div class="text-end">
                            {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                            {' '}

                            {/* if is not loggedin maka && mauapa  */}
                            {!isLoggedin && <Button variant="btn btn-primary" onClick={handleConnectWallet}>Connect Wallet</Button>}


                            {/* if is not loggedin maka ? mauapa :(else) isinya apa  */}
                        </div>
                    </div>
                </div>
            </header>

            <div class="b-example-divider"></div>


        </>

    )
}

export default TopBar
