// This is the component where I have made my web app as a single page app as described in the task.

import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import instance from '../axios';

const Layout = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get();
            setCategory(request.data);
            return request;
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>AllEvents</Navbar.Brand>
                    <Nav className="me-auto navbar">
                        <Nav><Link className="nav" to="/">Home</Link></Nav>
                        {category.map((item, index) => {
                            return (
                                <Nav key={index}><Link className="nav" to={`/${item.category}`}>{item.category}</Link></Nav>
                            );
                        })}
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;