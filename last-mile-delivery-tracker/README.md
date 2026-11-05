# Last-Mile Delivery Tracker Platform

A delivery management platform built with **Next.js (App Router)**, **Prisma ORM**, **SQLite**, and **Tailwind CSS**. It automates rate calculations based on volumetric & actual weights, dynamically assigns delivery agents based on zones, tracks orders with an immutable history, and manages failed delivery workflows.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Setup Guide](#project-setup-guide)
3. [Environment Configuration](#environment-configuration)
4. [Database Schema (Data Modeling)](#database-schema-data-modeling)
5. [Rate Calculation Logic & Engine](#rate-calculation-logic--engine)
6. [Auto-Assignment Engine](#auto-assignment-engine)
7. [Order Status Lifecycle & Failed Delivery Handling](#order-status-lifecycle--failed-delivery-handling)
8. [API Documentation](#api-documentation)
9. [Deployment Guide](#deployment-guide)

---

## Tech Stack
- **Full-Stack Framework**: Next.js 15+ (App Router, Server Actions & Route Handlers)
- **Database & ORM**: SQLite + Prisma 7 (zero external dependencies for seamless local testing)
- **Authentication**: JWT Cookie-based role-based auth (`ADMIN`, `CUSTOMER`, `AGENT`)
- **Styling**: Tailwind CSS

---

## Project Setup Guide

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm / yarn / pnpm

### Installation Steps
1. Navigate into the project folder:
   ```bash
   cd last-mile-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
4. Push database schema to create local SQLite database (`dev.db`):
   ```bash
   npx prisma db push
   ```
5. Generate Prisma client types:
   ```bash
   npx prisma generate
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```
7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Configuration
Configure your `.env` based on `.env.example`:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="super-secret-jwt-key-change-in-production"
NODE_ENV="development"
```

---

## Database Schema (Data Modeling)

The platform models relationships between Users, Zones, Rate Cards, Orders, and Tracking entries:

- **User**: Represents platform actors (`role`: `ADMIN`, `CUSTOMER`, `AGENT`). Agents are optionally mapped to a `zoneId`.
- **Zone**: Defines operational territories (`name`, `areas` as stringified JSON / list of pincodes/localities).
- **RateCard**: Configurable rates per route. Contains `orderType` (`B2B` or `B2C`), `sourceZoneId`, `destinationZoneId`, `baseRate`, `weightRate` (per kg), and `codSurcharge`.
- **Order**: Captures shipment details (`pickupAddress`, `dropAddress`, `pickupZoneId`, `dropZoneId`, dimensions `L,B,H`, `actualWeight`, `volumetricWeight`, `billedWeight`, `orderType`, `paymentType`, `totalCharge`, `status`, `customerId`, `agentId`).
- **OrderTracking**: Immutable audit log of all status transitions (`orderId`, `status`, `actorId`, `message`, `timestamp`).

---

## Rate Calculation Logic & Engine

Located in `src/lib/rate-engine.ts`:
1. **Volumetric Weight**:
   $$\text{Volumetric Weight (kg)} = \frac{\text{Length (cm)} \times \text{Breadth (cm)} \times \text{Height (cm)}}{5000}$$
2. **Billed Weight**:
   $$\text{Billed Weight} = \max(\text{Actual Weight}, \text{Volumetric Weight})$$
3. **Dynamic Zone & Rate Card Lookup**:
   Matches `pickupZoneId`, `dropZoneId`, and `orderType` (`B2B` / `B2C`) against the configured `RateCard`.
4. **Final Charge Calculation**:
   $$\text{Total Charge} = \text{Base Rate} + (\text{Billed Weight} \times \text{Weight Rate}) + (\text{COD Surcharge if Payment is COD})$$

---

## Auto-Assignment Engine

Located in `src/lib/assignment-engine.ts`:
- On order placement, the engine queries available delivery agents assigned to the pickup zone (`zoneId === pickupZoneId`).
- If matching agents are found, the order status transitions to `ASSIGNED` and logs an initial immutable tracking history event.
- Fallback logic is supported if no local agent is available.

---

## Order Status Lifecycle & Failed Delivery Handling

1. **Lifecycle Stages**:
   `PENDING` $\rightarrow$ `ASSIGNED` $\rightarrow$ `PICKED_UP` $\rightarrow$ `IN_TRANSIT` $\rightarrow$ `DELIVERED` or `FAILED`.
2. **Immutable Audit Trail**:
   Every status change is recorded into `OrderTracking` with timestamp and actor ID.
3. **Failed Delivery Flow**:
   - Agent marks the package as `FAILED`.
   - The system flags the order and emits a notification (simulated email/SMS log).
   - The customer is presented with an option to reschedule for a new delivery attempt.

---

## API Documentation

### Authentication
- `POST /api/auth/register` - Create new user (`name`, `email`, `password`, `role`, `zoneId`).
- `POST /api/auth/login` - Authenticate and set HTTP-only JWT cookie.
- `POST /api/auth/logout` - Clear authentication session.

### Zones & Rate Cards
- `GET /api/zones` - List all configured delivery zones.
- `POST /api/zones` - Add a new zone (`name`, `areas`).
- `GET /api/rate-cards` - Retrieve all rate cards.
- `POST /api/rate-cards` - Create rate card (`orderType`, `sourceZoneId`, `destinationZoneId`, `baseRate`, `weightRate`, `codSurcharge`).

### Orders & Tracking
- `GET /api/orders` - Filter orders (query params: `customerId`, `agentId`).
- `POST /api/orders` - Place order with automatic weight calculation, rate computation, and agent assignment.
- `PATCH /api/orders/:id/status` - Update order status and append immutable tracking history.

---

## Deployment Guide

- **Vercel**: Run `vercel deploy` or connect the Git repository. For PostgreSQL in production, update `schema.prisma` provider to `postgresql` and provide `DATABASE_URL`.
- **Render / Railway**: Configure `npm run build` and `npm start` with node runtime.
