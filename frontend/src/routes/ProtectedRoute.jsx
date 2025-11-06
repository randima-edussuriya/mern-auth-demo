import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, authChecked, children }) => {
  const location = useLocation();
  if (!authChecked) return null;
  if (!isLoggedIn) {
    return <Navigate to="/login"  state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
