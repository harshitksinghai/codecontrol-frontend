import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  // Replace with real logic
  return true;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
