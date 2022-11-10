import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-16">
        <ClipLoader
          color={"#22c55e"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoutes;
