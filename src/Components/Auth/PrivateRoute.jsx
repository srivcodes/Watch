import { Navigate, Route } from 'react-router-dom';
import React from 'react';
import { useAuth } from 'Context/AuthContext';

export const PrivateRoute = ({ path, ...props }) => {
  const {
    state: { token }
  } = useAuth();

  

  return token ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ from: path }} replace />
  );
};

