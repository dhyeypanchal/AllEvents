// Here I have make the toggle button for list and grid view.

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';
import Grid from './Grid';

function DisplayEventItem({ eventUrl }) {
    const instance2 = axios.create({
        baseURL: eventUrl
    });

    const [event, setEvent] = useState([]);
    const [click, setclick] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const request = await instance2.get();
            setEvent(request.data.item);
            return request;
        };
        fetchData();
    }, [instance2]);

    function handleClick(event) {
        setclick(!click);
    }

    return (
        <div>
            <div className='toggleButtons'>
                <button onClick={handleClick}>{click ? "List View" : "Grid View"}</button>
            </div>
            {event.map((item, index) => {
                return (
                    <div key={index}>
                        {click ? <List key={index} id={index} eventName={item.eventname} thumbUrl={item.thumb_url} eventDate={item.label} address={item.venue.full_address} /> : <Grid key={index} id={index} eventName={item.eventname} thumbUrl={item.thumb_url} eventDate={item.label} address={item.venue.full_address} />}
                    </div>
                );
            })};
        </div>
    );
};

export default DisplayEventItem;