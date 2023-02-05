// This is the component of my app which displays the event category menu from the given api.

import React from 'react';
import { useState, useEffect } from 'react';
import instance from '../axios';
import Menu from './Menu';

function Home() {
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
        <div className='flex'>
            {category.map((item, index) => {
                return (
                    <Menu key={index} items={item.category} />
                );
            })}
        </div>
    )
}

export default Home;