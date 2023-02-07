// It is the component for displaying the home component menu.

import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function Menu({ items }) {
    return (
            <Link className="home" to={`/${items}`}>
            <Card className="mx-3 mt-5" style={{ width: '15rem', backgroundColor: "rgba(136, 217, 231, 0.1)",border: "2px solid black" }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", fontSize: "2rem"}}>{items}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
    );
};

export default Menu;