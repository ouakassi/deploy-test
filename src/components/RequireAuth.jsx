import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("AUTH " + auth);
  console.log("AUTH email " + auth.email);

  console.log("location " + location.pathname);
  return auth?.email ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default RequireAuth;
