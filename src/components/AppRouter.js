import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CustomRoute } from 'components/CustomRoute';
import { Login } from 'pages/Login/Login';

export const AppRouter = () => {
  const Contacts = lazy(() => import('pages/Contacts/Contacts'));
  const Register = lazy(() => import('pages/Register/Register'));

  return (
    <Suspense>
      <Routes>
        <Route
          path="/register"
          element={
            <CustomRoute routeMode="restricted">
              <Register />
            </CustomRoute>
          }
        />
        <Route
          path="/login"
          element={
            <CustomRoute routeMode="restricted">
              <Login />
            </CustomRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <CustomRoute routeMode="protected">
              <Contacts />
            </CustomRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};
