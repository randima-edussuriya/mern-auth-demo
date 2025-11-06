import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const ProtectedRoute = ({ isLoggedIn, authChecked, children }) => {
  const location = useLocation();
  if (!authChecked)
    return <Loader background="bg-linear-to-br from-blue-300 to-green-300" />;
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
