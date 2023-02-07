// This is the component which displays list view.

import React from 'react';
import Container from 'react-bootstrap/esm/Container';

function List({ eventName, thumbUrl, eventDate, address, id }) {
    return (
        <div className='list'>
            <Container className='listContainer'>
                <h1><span style={{fontWeight: "bold"}}>Event Name</span> - {eventName}</h1>
                <img src={thumbUrl} alt="allevents.in" style={{ width: "10.5rem", height: "10.5rem", objectFit: "contain" }} />
                <h3><span style={{ fontWeight: "bold" }}>Date</span> - {eventDate}</h3>
                <h3><span style={{ fontWeight: "bold" }}>Address</span> - {address}</h3>
            </Container>
        </div>
    );
};

export default List;