// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import fakeAuth from './auth';

// ProtectedRoute component
function ProtectedRoute({ children, allowedRoles }:{ children:any, allowedRoles:string[] }) {
  if (!fakeAuth.isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(fakeAuth.role!)) {
    // Redirect to unauthorized page if role is not allowed
    return <Navigate to="/unauthorized" replace />;
  }

  // If authenticated and role matches, allow access
  return children;
}

export default ProtectedRoute;
