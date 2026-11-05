"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.role === "ADMIN") router.push("/admin");
      else if (data.role === "CUSTOMER") router.push("/customer");
      else if (data.role === "AGENT") router.push("/agent");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Delivery Tracker Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register" className="text-blue-600 hover:underline">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
}
