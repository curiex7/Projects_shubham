"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AgentDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/orders").then(r => r.json()).then(setOrders);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  const updateStatus = async (orderId: string, status: string) => {
    const res = await fetch(`/api/orders/${orderId}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, actorId: "AGENT_ID_MOCK" }) // In real app, get from session
    });
    if (res.ok) {
      alert("Status updated");
      fetch("/api/orders").then(r => r.json()).then(setOrders);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Agent Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Assigned Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orders.map(o => (
            <div key={o.id} className="bg-white p-4 rounded shadow border flex flex-col justify-between">
              <div>
                <strong>Order ID: {o.id.substring(0,8)}</strong>
                <p className="text-sm text-gray-600 mt-2">{o.pickupAddress} &rarr; {o.dropAddress}</p>
                <p className="text-sm font-bold mt-2">Current Status: {o.status}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => updateStatus(o.id, "PICKED_UP")} className="bg-yellow-500 text-white px-2 py-1 text-sm rounded">Picked Up</button>
                <button onClick={() => updateStatus(o.id, "IN_TRANSIT")} className="bg-blue-500 text-white px-2 py-1 text-sm rounded">In Transit</button>
                <button onClick={() => updateStatus(o.id, "DELIVERED")} className="bg-green-500 text-white px-2 py-1 text-sm rounded">Delivered</button>
                <button onClick={() => updateStatus(o.id, "FAILED")} className="bg-red-500 text-white px-2 py-1 text-sm rounded">Failed</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
