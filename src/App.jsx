import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { fetchUser } from './github';

function App() {
  const [user, setUser] = useState();

  useQuery(['user'], async () => {
    const result = await fetchUser();
    setUser(result);
    return result;
  }, {
    refetchOnWindowFocus: false,
  });
  return (
    <div className="h-100 row d-flex">
      {user && (
        <>
          <Sidebar user={user} />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
