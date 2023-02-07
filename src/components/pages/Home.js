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
        <div>
            <div style={{ marginLeft: "85px", marginRight: "85px" }}><h1 className='homeHeading'>Tap Below To See Particular Category Of Events</h1></div>      
            <div className='flex'>    
                    {category.map((item, index) => {
                        return (
                            <div key={index}>
                                <Menu key={index} items={item.category} />
                            </div>
                        );
                    })}
                </div>
        </div>
    )
}

export default Home;