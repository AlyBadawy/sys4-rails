import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { OfflineRouterConfig, OnlineRouterConfig } from './RoutesConfig';
import { useIsAppOnline } from '../hooks/useIsAppOnline';

export const AppRoot = () => {
  const store = setupStore();
  const isAppOnline = useIsAppOnline();
  const OnlineRouter = createBrowserRouter(OnlineRouterConfig);
  const OfflineRouter = createBrowserRouter(OfflineRouterConfig);

  return (
    <Provider store={store}>
      <RouterProvider router={isAppOnline ? OnlineRouter : OfflineRouter} />
    </Provider>
  );
};
