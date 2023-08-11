import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RandomGreeting from './components/RandomGreeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomGreeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
