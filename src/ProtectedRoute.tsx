// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './Context/Auth';

// ProtectedRoute component
function ProtectedRoute({ children, allowedRoles }:{ children:any, allowedRoles:string[] }) {

  const {user} = useAuth()

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }else if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to unauthorized page if role is not allowed
    return <Navigate to="/unauthorized" replace />;
  }

  // If authenticated and role matches, allow access
  return children;
}

export default ProtectedRoute;
