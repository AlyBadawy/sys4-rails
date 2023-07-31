import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useFlipper } from '../hooks/useFlipper';
import { OfflineRouterConfig, OnlineRouterConfig } from './RoutesConfig';

export const AppRoot = () => {
  const isOnline = useFlipper('app_online');
  const store = setupStore();
  const OnlineRouter = createBrowserRouter(OnlineRouterConfig);
  const OfflineRouter = createBrowserRouter(OfflineRouterConfig);

  return (
    <Provider store={store}>
      <RouterProvider router={isOnline ? OnlineRouter : OfflineRouter} />
    </Provider>
  );
};
