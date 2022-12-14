import React from 'react';
import { Route, createRoutesFromElements, createHashRouter } from 'react-router-dom';

import App, { loader as userLoader } from './App';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';

const router = (queryClient) => (
  createHashRouter(
    createRoutesFromElements(
      <Route
        exact
        path="/"
        element={<App />}
        loader={userLoader(queryClient)}
      >
        <Route path="" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>,
    ),
  )
);

export default router;
