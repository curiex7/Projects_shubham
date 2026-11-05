"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomerDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  // In a real app we'd decode the JWT to get customerId, or fetch a /api/me route.
  // For simplicity, we just fetch all orders here to demonstrate.
  useEffect(() => {
    fetch("/api/orders").then(r => r.json()).then(setOrders);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="mb-8">
        <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700" onClick={() => alert("Order creation flow would go here!")}>
          + Create New Order
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Orders & Tracking</h2>
        <div className="space-y-4">
          {orders.map(o => (
            <div key={o.id} className="bg-white p-4 rounded shadow border">
              <div className="flex justify-between items-center mb-2">
                <strong>Order ID: {o.id.substring(0,8)}</strong>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-bold text-xs">{o.status}</span>
              </div>
              <p className="text-sm text-gray-600">From: {o.pickupAddress} &rarr; To: {o.dropAddress}</p>
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Tracking History</h4>
                <ul className="text-sm space-y-1">
                  {o.trackings?.map((t: any) => (
                    <li key={t.id} className="flex gap-2">
                      <span className="text-gray-400">{new Date(t.timestamp).toLocaleString()}</span>
                      <span>{t.message}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
