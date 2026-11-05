# System Design Write-Up: Last-Mile Delivery Management Platform

## 1. Executive Overview
The Last-Mile Delivery Tracker is architected to handle the dynamic, multi-actor demands of modern logistics operations. The platform balances high configurability for logistics administrators, seamless transparency for end customers, and streamlined execution for field delivery agents. The core design centers around four pillars: an extensible Rate Calculation Engine, Zone Detection & Routing, Intelligent Auto-Assignment, and a Resilient Order Lifecycle with Failed Delivery Recovery.

---

## 2. Rate Calculation Engine
Logistics pricing depends on volume, weight, distance, client tier (B2B vs. B2C), and payment collection mode. Hardcoded business logic quickly leads to operational bottlenecks; therefore, our calculation engine is entirely dynamic and data-driven.

### Mathematical Formulation
1. **Volumetric Weight ($\text{kg}$)**:
   Logistics freight occupies space in cargo vehicles. We compute dimensional weight using the standard industry divisor:
   $$\text{Volumetric Weight} = \frac{\text{Length (cm)} \times \text{Breadth (cm)} \times \text{Height (cm)}}{5000}$$
2. **Chargeable (Billed) Weight**:
   $$\text{Billed Weight} = \max(\text{Actual Weight}, \text{Volumetric Weight})$$
3. **Dynamic Tariff Resolution**:
   On order creation, the engine queries the `RateCard` repository indexed by composite key `(sourceZoneId, destinationZoneId, orderType)`.
4. **Final Quotation**:
   $$\text{Total Charge} = \text{Base Rate} + (\text{Billed Weight} \times \text{Weight Rate}) + \mathbb{I}_{\text{COD}} \cdot \text{COD Surcharge}$$
   Where $\mathbb{I}_{\text{COD}} = 1$ if payment method is COD, else $0$.

Before confirmation, this quotation is calculated and presented to the customer with a full cost breakdown.

---

## 3. Zone Detection Approach
Geographic delivery operational areas are divided into discrete **Zones** (e.g., North Hub, South Hub, Metro Intra-zone). Each Zone entity maintains a list of mapped area identifiers (postal codes, neighborhood names, or geofenced polygon tags).

- **Detection Strategy**: When pickup and drop addresses are entered, the system parses the locality/postal code and maps it to the corresponding `Zone` ID.
- **Intra-zone vs. Inter-zone**: If `pickupZoneId === dropZoneId`, the intra-zone rate card is applied; otherwise, inter-zone pricing takes effect.

---

## 4. Auto-Assignment Logic & Agent Availability
Order dispatching minimizes transit latency by assigning tasks to proximate, available delivery personnel.

```
[Order Created] 
       │
       ▼
[Identify Pickup Zone]
       │
       ▼
[Query Active Agents in Pickup Zone]
       ├─── Agents Available ──► [Select Optimal Agent & Assign]
       │                                  │
       └─── No Local Agents  ──► [Fallback / Global Pool Allocation]
                                          │
                                          ▼
                             [Status -> ASSIGNED + Log Audit]
```

### Assignment Strategy
1. **Filtering**: The system queries active agents whose registered `zoneId` matches the order's `pickupZoneId`.
2. **Workload & Proximity Balancing**: For scale, the selection evaluates agent active order count and proximity to avoid dispatch bottlenecks.
3. **State Transition & Notification**: Once an agent is selected, the order transitions atomically from `PENDING` to `ASSIGNED`, creating an immutable tracking event and triggering push/SMS alerts.

---

## 5. Order Status Lifecycle & Failed Delivery Handling
Shipment history requires immutability for compliance, audit trails, and customer trust.

### Lifecycle Model
$$\text{PENDING} \longrightarrow \text{ASSIGNED} \longrightarrow \text{PICKED\_UP} \longrightarrow \text{IN\_TRANSIT} \longrightarrow \begin{cases} \text{DELIVERED} \\ \text{FAILED} \longrightarrow \text{RESCHEDULED} \end{cases}$$

### Immutable Audit Log
Every status mutation is captured in an append-only `OrderTracking` entity with `orderId`, `actorId`, `status`, `timestamp`, and diagnostic notes.

### Failed Delivery Flow
1. When an agent flags an attempt as `FAILED` (e.g., customer unavailable, incorrect address), the state transition is recorded immediately.
2. The notification subsystem dispatches an automated email and SMS to the customer containing a direct link to reschedule.
3. Upon customer confirmation of a new delivery window, the order status resets for rescheduling and is re-queued into the agent assignment pool for the subsequent attempt.
