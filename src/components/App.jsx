import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { AppRouter } from 'components/AppRouter';
import { Navigation } from 'components/Navigation/Navigation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
};
