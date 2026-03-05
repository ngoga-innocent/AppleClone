import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import IOSSpinner from "../Components/AppleSpinner";
import { url } from "../url";

interface User {
  id: number;
  username: string;
  password: string;
  macpassword?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  country?: string | null;
  birthday?: string | null;
  phone_number?: string | null;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("accessToken");

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${url}/api/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch users");

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Select single user
  const toggleUserSelection = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id)
        ? prev.filter((uid) => uid !== id)
        : [...prev, id]
    );
  };

  // Select all users
  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((u) => u.id));
    }
  };

  // Delete one user
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this user?")) return;

    try {
      const res = await fetch(`${url}/api/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error();

      setUsers((prev) => prev.filter((u) => u.id !== id));
      setSelectedUsers((prev) => prev.filter((uid) => uid !== id));
    } catch {
      alert("Delete failed");
    }
  };

  // Bulk delete
  const handleBulkDelete = async () => {
    if (selectedUsers.length === 0) return;

    if (!confirm(`Delete ${selectedUsers.length} users?`)) return;

    try {
      await Promise.all(
        selectedUsers.map((id) =>
          fetch(`${url}/api/${id}/`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );

      setUsers((prev) =>
        prev.filter((user) => !selectedUsers.includes(user.id))
      );

      setSelectedUsers([]);
    } catch {
      alert("Bulk delete failed");
    }
  };

  // Filter users
  const filteredUsers = users.filter(
    (u) =>
      u.username?.toLowerCase().includes(search.toLowerCase()) ||
      u.first_name?.toLowerCase().includes(search.toLowerCase()) ||
      u.last_name?.toLowerCase().includes(search.toLowerCase()) ||
      u.country?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <IOSSpinner />;
  if (error) return <p className="p-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-4xl font-bold text-gray-800">User Dashboard</h1>

        <div className="flex gap-3">

          {selectedUsers.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow"
            >
              <FaTrash />
              Delete ({selectedUsers.length})
            </button>
          )}

          <button
            onClick={() => alert("Add user disabled")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
          >
            <FaPlus /> Add User
          </button>

        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">

          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">

            <tr>
              <th className="py-3 px-4">
                <input
                  type="checkbox"
                  checked={
                    filteredUsers.length > 0 &&
                    selectedUsers.length === filteredUsers.length
                  }
                  onChange={toggleSelectAll}
                />
              </th>

              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Password</th>
              <th className="py-3 px-6 text-left">Mac Password</th>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Country</th>
              <th className="py-3 px-6 text-left">Birthday</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-200">

            <AnimatePresence>

              {filteredUsers.map((user, i) => {

                const selected = selectedUsers.includes(user.id);

                return (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`${
                      selected
                        ? "bg-indigo-100"
                        : i % 2 === 0
                        ? "bg-gray-50"
                        : "bg-white"
                    } hover:bg-indigo-100 transition`}
                  >

                    <td className="py-4 px-4">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleUserSelection(user.id)}
                      />
                    </td>

                    <td className="py-4 px-6">{user.id}</td>
                    <td className="py-4 px-6">{user.username}</td>
                    <td className="py-4 px-6">{user.password || "-"}</td>
                    <td className="py-4 px-6">{user.macpassword || "-"}</td>
                    <td className="py-4 px-6">{user.first_name || "-"}</td>
                    <td className="py-4 px-6">{user.last_name || "-"}</td>
                    <td className="py-4 px-6">{user.country || "-"}</td>
                    <td className="py-4 px-6">{user.birthday || "-"}</td>
                    <td className="py-4 px-6">{user.phone_number || "-"}</td>

                    <td className="py-4 px-6 flex gap-3">

                      <button className="text-indigo-600 hover:text-indigo-800">
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </motion.tr>
                );
              })}

            </AnimatePresence>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default UserDashboard;