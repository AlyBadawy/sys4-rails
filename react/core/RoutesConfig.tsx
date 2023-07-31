import React, { lazy } from 'react';
import { ElmLoader } from './loadSuspenders/ElmLoader';
import { GuestRoute } from './auth/GuestRoute';
import { PrivateRoute } from './auth/PrivateRoute';
import { AppLayout } from './AppLayout';
import { Home } from '../home/Home';

const OfflineApp = lazy(() => import('./OfflineApp'));
const Dashboard = lazy(() => import('../app/dashboard/Dashboard'));
const Account = lazy(() => import('../app/account/Account'));
const AppContainer = lazy(() => import('../app/AppContainer'));

const TermsOfUse = lazy(() =>
  import('./legalPages/Legal').then(({ TermsOfUse }) => ({
    default: TermsOfUse,
  }))
);
const PrivacyPolicy = lazy(() =>
  import('./legalPages/Legal').then(({ PrivacyPolicy }) => ({
    default: PrivacyPolicy,
  }))
);

const CookiesPolicy = lazy(() =>
  import('./legalPages/Legal').then(({ CookiesPolicy }) => ({
    default: CookiesPolicy,
  }))
);

const SignIn = lazy(() =>
  import('./auth/Auth').then(({ SignIn }) => ({ default: SignIn }))
);
const SignUp = lazy(() =>
  import('./auth/Auth').then(({ SignUp }) => ({ default: SignUp }))
);
const ForgotPassword = lazy(() =>
  import('./auth/Auth').then(({ ForgotPassword }) => ({
    default: ForgotPassword,
  }))
);
const ResetPassword = lazy(() =>
  import('./auth/Auth').then(({ ResetPassword }) => ({
    default: ResetPassword,
  }))
);

const NotFound = lazy(() => import('./NotFound'));

export const OnlineRouterConfig = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ElmLoader elm={<NotFound />} />,
    children: [
      { index: true, element: <Home /> },
      { path: 'privacy', element: <ElmLoader elm={<PrivacyPolicy />} /> },
      { path: 'terms', element: <ElmLoader elm={<TermsOfUse />} /> },
      { path: 'cookies', element: <ElmLoader elm={<CookiesPolicy />} /> },
      {
        element: <GuestRoute />,
        children: [
          { path: 'sign_in', element: <ElmLoader elm={<SignIn />} /> },
          { path: 'sign_up', element: <ElmLoader elm={<SignUp />} /> },
          {
            path: 'forgot_password',
            element: <ElmLoader elm={<ForgotPassword />} />,
          },
          {
            path: 'reset_password',
            element: <ElmLoader elm={<ResetPassword />} />,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'app',
            element: <ElmLoader elm={<AppContainer />} />,
            children: [
              { index: true, element: <ElmLoader elm={<Dashboard />} /> },
              { path: 'account', element: <ElmLoader elm={<Account />} /> },
            ],
          },
        ],
      },
    ],
  },
];

export const OfflineRouterConfig = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <ElmLoader elm={<OfflineApp />} /> },
      { path: '*', element: <ElmLoader elm={<OfflineApp />} /> },
    ],
  },
];
