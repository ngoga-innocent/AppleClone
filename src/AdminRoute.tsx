import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: any) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;