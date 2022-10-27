import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-100 row d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
