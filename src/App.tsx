import { Routes, Route, Navigate } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Home from "./pages/Home";
import List from "./pages/ListUser";
import UserInfo from "./pages/UserInfo";
import MacUnlockModal from "./pages/MacUnlock";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./AdminRoute";


function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/unlock" element={<MacUnlockModal />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/list"
          element={
            <AdminRoute>
              <List />
            </AdminRoute>
          }
        />

        {/* Not Found Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;