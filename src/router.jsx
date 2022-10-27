import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      exact
      path="/"
      element={<App />}
    >
      <Route path="" element={<div className="col">About Me page</div>} />
      <Route path="portfolio" element={<div className="col">Portfolio page</div>} />
      <Route path="resume" element={<div className="col">Resume page</div>} />
      <Route path="contact" element={<div className="col">Contact page</div>} />
    </Route>,
  ),
);

export default router;
