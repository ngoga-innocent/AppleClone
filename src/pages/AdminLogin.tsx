import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../url";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${url}/api/admin/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      navigate("/admin/list");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute w-150 h-150 bg-purple-600 rounded-full blur-[180px] opacity-40 animate-pulse -top-40 -left-40"></div>
      <div className="absolute w-150 h-150 bg-blue-600 rounded-full blur-[180px] opacity-40 animate-pulse bottom-0 right-0"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 text-white p-10 rounded-2xl shadow-2xl w-[380px]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>

        {/* Button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
