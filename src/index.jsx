import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
const queryRouter = router(queryClient);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing>
      <RouterProvider router={queryRouter} />
    </QueryClientProvider>
  </React.StrictMode>,
);
