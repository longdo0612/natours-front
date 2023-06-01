import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../features/auth/authSlice';
import { Navigate, Outlet } from 'react-router-dom';

const RequiredAuth = () => {
  const token = useSelector(selectCurrentToken);

  return <>{token ? <Outlet /> : <Navigate to='/login' replace />}</>;
};

export default RequiredAuth;
