// This component fetches the inside url of the given api.

import React from 'react';
import { useState, useEffect } from 'react';
import instance from '../axios';
import DisplayEventItem from './DisplayEventItem';

function DisplayEvent({ id }) {
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
        <div>
            {
                category.map((item, ind) => {
                    return (
                        <div key={ind}>{id === ind ? <DisplayEventItem eventUrl={item.data} key={ind} /> : null}</div>
                    );
                })
            }

        </div>
    );
};

export default DisplayEvent;