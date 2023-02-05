// It is the main component of my web app where I have define the routes of project.

import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import instance from './axios';
import DisplayEvent from "./pages/DisplayEvent";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {category.map((item, index) => {
            return (
              <Route path={`/${item.category}`} key={index} element={<DisplayEvent key={index} id={index} />} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;