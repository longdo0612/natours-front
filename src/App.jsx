import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import TourPage from './pages/TourPage';
import TourDetailsPage from './pages/TourDetailsPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import RequiredAuth from './components/RequiredAuth';
import UserTourPage from './pages/UserTourPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/tours',
        element: <TourPage />,
      },
      {
        path: '/tours/:slug',
        element: <TourDetailsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      { path: '/signup', element: <SignupPage /> },
      {
        element: <RequiredAuth />,
        children: [
          {
            path: '/me',
            element: <UserPage />,
          },
          {
            path: '/my-tours',
            element: <UserTourPage />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
