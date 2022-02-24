import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Albums from './Albums';

const Home = () => {
  return (
    <Routes>
      <Route exact path="/">
        <Albums />
      </Route>
      <Route path="/local">
        
      </Route>
    </Routes>
  )
}

export default Home;