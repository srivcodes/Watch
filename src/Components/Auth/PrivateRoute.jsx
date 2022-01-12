import { Navigate, Route } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../Context/AuthContext';

export const PrivateRoute = ({ path, ...props }) => {
  const {
    state: { token }
  } = useAuth();

  console.log(props.children);

  return token ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ from: path }} replace />
  );
};

