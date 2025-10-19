import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminCreateAccount() {
  const { logout } = useAuth();
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [status, setStatus] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    // You can later replace this with an API call to your backend
    console.log("Created new user:", { email, school });

    setStatus(`✅ Account for ${email} added to ${school}`);
    setEmail("");
    setSchool("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Create User Account</h2>

      <form onSubmit={handleCreate} className="w-80 space-y-4">
        <input
          className="w-full border rounded p-2"
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded p-2"
          type="text"
          placeholder="School ID"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Create Account
        </button>
      </form>

      {status && <p className="mt-4 text-green-600">{status}</p>}

      <button
        onClick={logout}
        className="mt-6 text-sm text-red-500 hover:underline"
      >
        Log Out
      </button>
    </div>
  );
}
