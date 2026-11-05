"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    if (res.ok) {
      alert("Registration successful. Please login.");
      router.push("/");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-md border p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select value={role} onChange={e => setRole(e.target.value)} className="mt-1 block w-full rounded-md border p-2">
              <option value="CUSTOMER">Customer</option>
              <option value="AGENT">Agent</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Register</button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/" className="text-blue-600 hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}
