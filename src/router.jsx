import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import App, { loader as userLoader } from './App';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';

const router = (queryClient) => (
  createBrowserRouter(
    createRoutesFromElements(
      <Route
        exact
        path="/"
        element={<App />}
        loader={userLoader(queryClient)}
      >
        <Route path="" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<div className="col">Resume page</div>} />
        <Route path="contact" element={<div className="col">Contact page</div>} />
      </Route>,
    ),
  )
);

export default router;
