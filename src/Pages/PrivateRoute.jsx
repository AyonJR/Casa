import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center mt-[40vh]">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
