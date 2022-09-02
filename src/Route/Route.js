import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Schedule } from '../Routes';

const RoutesConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
  
}

export default RoutesConfig;
