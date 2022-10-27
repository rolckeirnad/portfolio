import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-100 row d-flex">
      <Sidebar />
      <div className="bg-secondary col">Content</div>
    </div>
  );
}

export default App;
