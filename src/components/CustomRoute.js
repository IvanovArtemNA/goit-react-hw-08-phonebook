import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const CustomRoute = ({ children, routeMode }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (routeMode === 'protected') {
    return isLoggedIn ? children : <Navigate to="/login" />;
  }

  if (routeMode === 'restricted') {
    return isLoggedIn ? <Navigate to="/contacts" /> : children;
  }
};
