// src/App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from './Pages/ResetPassword';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Router>
    <Routes>
      <Route path="/" element={<ResetPassword/>} />
      
    </Routes>
  
  </Router>
  );
}

export default App;
