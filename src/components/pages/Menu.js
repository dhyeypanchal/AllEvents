// It is the component for displaying the home component menu.

import React from 'react';
import Card from 'react-bootstrap/Card';

function Menu({ items }) {
    return (
        <div>
            <Card className="mx-3 mt-5" style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>{items}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Menu;