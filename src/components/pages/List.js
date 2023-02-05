// This is the component which displays list view.

import React from 'react';
import Container from 'react-bootstrap/esm/Container';

function List({ eventName, thumbUrl, eventDate, address, id }) {
    return (
        <div className='list'>
            <Container className='listContainer'>
                <h1>{id + 1} - {eventName}</h1>
                <img src={thumbUrl} alt="allevents.in" style={{ width: "10.5rem", height: "10.5rem", objectFit: "contain" }} />
                <h3>{eventDate}</h3>
                <h3>{address}</h3>
            </Container>
        </div>
    );
};

export default List;