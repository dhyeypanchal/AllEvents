// This is the component which displays the grid view.

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid({ eventName, thumbUrl, eventDate, address, id }) {
    return (
        <Container className='grid-container'>
            <Row className='row'>
                <Col className='column'>{id + 1}</Col>
                <Col className='column'><h5 style={{ fontWeight: "bold" }}>Event Name</h5>{eventName}</Col>
                <Col className='column'><img src={thumbUrl} alt="allevents.in" style={{ width: "10.5rem", height: "10.5rem", objectFit: "contain", borderRadius: "10px" }} /></Col>
                <Col className='column'><h5 style={{ fontWeight: "bold" }}>Date</h5>{eventDate}</Col>
                <Col className='column'><h5 style={{ fontWeight: "bold" }}>Address</h5>{address}</Col>
            </Row>
        </Container>
    );
};

export default Grid;