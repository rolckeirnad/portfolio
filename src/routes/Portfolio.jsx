import { useQuery } from '@tanstack/react-query';
import { parseISO } from 'date-fns';
import React from 'react';
import Card from '../components/Card';
import { fetchRepos } from '../github';

const reposQuery = () => ({
  queryKey: ['repos'],
  queryFn: async () => fetchRepos(),
});

export const loader = (queryClient) => async () => {
  const query = reposQuery();
  return queryClient.fetchQuery({ ...query, staleTime: 1000 * 60 * 30 });
};

const compareFn = (a, b) => {
  const parsedA = parseISO(a.pushed_at);
  const parsedB = parseISO(b.pushed_at);
  if (parsedA < parsedB) return 1;
  if (parsedB < parsedA) return -1;
  return 0;
};

function Portfolio() {
  const { data: repos, isSuccess } = useQuery(reposQuery());

  return (
    <div className="col bg-secondary container p-4 px-xl-5 h-100 overflow-auto">
      <h1 className="display-5 fw-bold lh-1 px-1">Portfolio</h1>
      <p>Here are some of my projects. Click on the image to visit live preview</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {isSuccess && repos.filter((repo) => repo.has_pages).sort((a, b) => compareFn(a, b))
          .map((repo) => (
            <div key={repo.id} className="col">
              <Card info={{ ...repo }} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
