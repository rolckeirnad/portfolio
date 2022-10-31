import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { fetchRepos, fetchUser } from './github';

const userQuery = () => ({
  queryKey: ['user'],
  queryFn: async () => fetchUser(),
});

const reposQuery = () => ({
  queryKey: ['repos'],
  queryFn: async () => fetchRepos(),
});

export const loader = (queryClient) => async () => {
  const query = userQuery();
  return (
    queryClient.getQueryData(query.queryKey)
    ?? (queryClient.fetchQuery({ ...query, staleTime: Infinity }))
  );
};

function App() {
  const { data: user, isSuccess } = useQuery(userQuery(), {
    staleTime: 1000 * 60 * 60,
  });

  const reposStatus = useQuery(reposQuery(), {
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div className="h-100 row d-flex">
      {isSuccess && (
        <>
          <Sidebar user={user} />
          <Outlet context={reposStatus} />
        </>
      )}
    </div>
  );
}

export default App;
