"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [zones, setZones] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/zones").then(r => r.json()).then(setZones);
    fetch("/api/orders").then(r => r.json()).then(setOrders);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Zones</h2>
          <ul className="bg-white rounded shadow p-4">
            {zones.map(z => (
              <li key={z.id} className="border-b py-2">
                <strong>{z.name}</strong> - {z.areas}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <ul className="bg-white rounded shadow p-4 max-h-96 overflow-auto">
            {orders.map(o => (
              <li key={o.id} className="border-b py-2 text-sm">
                ID: {o.id.substring(0,8)} | Status: <span className="font-bold text-blue-600">{o.status}</span> | Charge: ₹{o.totalCharge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
