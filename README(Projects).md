Project-1

# 🌱 Quantum Genetic Simulator for Crop Performance Optimisation

A Hybrid Quantum Genetic Algorithm (HQGA) simulator that combines **quantum-inspired optimisation**, **genetic algorithms**, and **machine learning** to discover optimal crop genotypes capable of performing well under different environmental conditions.

The project uses **Qiskit** to simulate quantum populations and a **Random Forest surrogate model** to evaluate crop performance under drought and heat stress scenarios using historical weather data.

---

## 📌 Project Overview

Traditional genetic algorithms often struggle with premature convergence and local optima. This project explores a **Hybrid Quantum Genetic Algorithm (HQGA)** where quantum circuits represent candidate solutions and quantum-inspired rotations guide the optimisation process.

Each candidate genotype is evaluated using a machine learning surrogate model trained on genotype-phenotype data, while environmental robustness is estimated through simulated weather scenarios.

---

## 🚀 Features

- Hybrid Quantum Genetic Algorithm (HQGA)
- Quantum population initialization using Qiskit
- Quantum rotation gate-based evolution
- Random Forest surrogate model for phenotype prediction
- Weather-based crop performance simulation
- Monte Carlo environmental evaluation
- Heat and drought stress testing
- Best genotype optimisation across multiple generations

---

## 🛠 Technologies Used

- Python 3
- Qiskit
- Qiskit Aer
- NumPy
- Pandas
- Scikit-learn
- Random Forest Regression

---

## 📂 Project Structure

```
quantum-genetic-simulator/

│── main.py                          # Main optimisation algorithm
│── simulation_engine.py             # Crop simulation engine
│── create_dataset.py                # Generates genotype dataset
│── create_weather_dataset.py        # Generates weather dataset
│── geno_pheno_dataset.csv           # Training dataset
│── weather_climate_2019_2020.csv    # Weather dataset
│── README.md
```

---

## ⚙️ How It Works

### Step 1

Generate the crop genotype dataset.

```bash
python create_dataset.py
```

### Step 2

Generate the weather dataset.

```bash
python create_weather_dataset.py
```

### Step 3

Run the optimisation.

```bash
python main.py
```

The program will:

- Initialise a quantum population
- Measure quantum states
- Predict crop performance
- Simulate weather conditions
- Compute fitness values
- Update the population
- Repeat until the best genotype is found

---

## 🧠 Machine Learning Component

The simulator trains a **Random Forest Regressor** using genotype-phenotype data to predict:

- Grain Yield
- Drought Resistance Score
- Heat Tolerance Score

This surrogate model provides fast evaluations during optimisation without repeatedly performing expensive biological simulations.

---

## ⚛️ Quantum Computing Component

The optimisation process uses Qiskit to:

- Initialise quantum individuals using Hadamard gates
- Measure quantum states
- Encode candidate genotypes
- Update populations through quantum rotation gates

Although executed on a simulator, the implementation follows principles used in quantum-inspired evolutionary algorithms.

---

## 🌦 Environmental Simulation

Historical weather data is used to create challenging environmental conditions, including:

- Drought scenarios
- High-temperature scenarios
- Monte Carlo sampling of extreme weather events

Each genotype is evaluated under multiple simulated conditions to estimate overall robustness.

---

## 📊 Expected Output

During execution, the simulator reports:

- Generation number
- Average population fitness
- Best fitness achieved
- Best genotype discovered
- Optimised crop solution

---

## 📈 Future Improvements

- Real quantum hardware execution (IBM Quantum)
- Deep Learning surrogate models
- Multi-objective optimisation
- Real agricultural datasets
- Interactive dashboard
- GPU acceleration
- Reinforcement Learning assisted optimisation

---

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/quantum-genetic-simulator.git
```

Move into the project folder

```bash
cd quantum-genetic-simulator
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the simulator

```bash
python main.py
```

---

## 📦 Requirements

```
qiskit
qiskit-aer
numpy
pandas
scikit-learn
```

You can generate the requirements file using:

```bash
pip freeze > requirements.txt
```

---

## 🎯 Applications

- Agricultural AI
- Crop breeding optimisation
- Quantum-inspired optimisation
- Evolutionary computing
- Climate-resilient agriculture
- Artificial Intelligence research

---

## 👨‍💻 Author

**Shubham Bhuyan**

B.Tech – VIT Chennai

GitHub: https://github.com/<your-username>

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!

Project-2

# 🚇 Metro Congestion Control System

An AI-powered Metro Congestion Control System designed to monitor passenger traffic, predict congestion levels, and optimize station resource allocation in real time. The system uses predictive analytics and intelligent staff assignment to improve commuter safety and operational efficiency.

---

## 📌 Project Overview

Urban metro systems experience heavy passenger congestion during peak hours, leading to delays and safety concerns. This project provides a smart congestion management solution that predicts passenger density, identifies overcrowded stations, and dynamically allocates staff to improve crowd management.

The application is built using **Python** and **Flask**, with REST APIs serving real-time station data and predictive insights.

---

## ✨ Features

- 🚉 Real-time metro station monitoring
- 📈 Passenger congestion prediction
- 👥 Intelligent staff allocation
- 🔄 Dynamic congestion updates
- 🌐 RESTful API using Flask
- ⚡ Cross-Origin support using Flask-CORS
- 📊 Congestion visualization
- 🚨 Overcrowding detection and alerts

---

## 🛠 Technologies Used

- Python
- Flask
- Flask-CORS
- NumPy
- Matplotlib
- Machine Learning Concepts
- REST API

---

## 📂 Project Structure

```
Metro-Congestion-Control-System/

│── backend.py              # Flask backend API
│── graph_logic.py          # Congestion prediction & visualization
│── static/                 # CSS, JS, images
│── templates/              # HTML pages
│── README.md
```

---

## ⚙️ System Workflow

1. Collect passenger traffic data.
2. Analyze congestion at each metro station.
3. Predict future passenger density.
4. Detect overcrowded stations.
5. Allocate available staff dynamically.
6. Display updated congestion status through the web interface.

---

## 🧠 AI & Predictive Analytics

The system includes a predictive module that estimates future congestion levels based on historical passenger traffic.

Predictions help operators:

- Prepare for peak-hour rush
- Allocate staff efficiently
- Reduce waiting time
- Improve passenger safety

---

## 🚉 Supported Metro Stations

Example stations included:

- Halasuru
- Trinity
- MG Road
- Cubbon Park
- Kempegowda
- KSR City

---

## 📡 API Features

The Flask backend provides APIs for:

- Current station status
- Passenger count
- Congestion levels
- Staff information
- Resource allocation

Example:

```
GET /api/status
```

Returns current congestion details for all stations.

---

## 📊 Expected Output

The system displays:

- Passenger density
- Congestion level
- Available staff
- Assigned staff
- Predicted congestion trend
- Station status

---

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/Metro-Congestion-Control-System.git
```

Move into the project directory

```bash
cd Metro-Congestion-Control-System
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the Flask server

```bash
python backend.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## 📦 Requirements

```
Flask
Flask-CORS
NumPy
Matplotlib
scikit-learn
```

Generate requirements automatically:

```bash
pip freeze > requirements.txt
```

---

## 🎯 Applications

- Smart City Solutions
- Intelligent Transportation Systems
- Metro Rail Management
- Passenger Flow Prediction
- Crowd Management
- Public Safety

---

## 🔮 Future Enhancements

- Deep Learning-based congestion prediction
- CCTV crowd analysis using Computer Vision
- IoT sensor integration
- Live GPS train tracking
- Passenger mobile application
- Cloud deployment
- Dashboard with real-time analytics
- Emergency evacuation planning

---

## 👨‍💻 Author

**Shubham Bhuyan**

B.Tech – VIT Chennai

GitHub: https://github.com/curiex7

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

Project-3

# 📦 Last-Mile Delivery Tracker Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, production-ready full-stack delivery management and tracking ecosystem designed to streamline logistics operations. The platform automates dynamic shipping rate computation (volumetric vs. actual weight), executes zone-based auto-assignment for delivery agents, records immutable audit trails for every order transition, and features an automated failed delivery recovery workflow.

---

## 📌 Project Overview

Last-mile logistics often encounter challenges such as inaccurate shipping fee calculations, manual dispatch bottlenecks, lack of transparent package tracking, and unorganized failed delivery handling.

This project delivers an end-to-end automated platform featuring:
- **Dynamic Rate Engine**: Computes volumetric vs. actual billed weight, base charges, per-kg weight charges, and COD surcharges.
- **Zone-Based Auto-Assignment**: Automatically matches orders to active delivery agents in the pickup zone.
- **Immutable Tracking Audit Trail**: Complete historical record of every package milestone with actor and timestamp logging.
- **Role-Based Portals**: Dedicated interfaces for Customers (create/track orders), Delivery Agents (update status/handle failures), and Admins (manage zones, rate cards, and all shipments).

---

## ✨ Key Features

- 📐 **Dynamic Volumetric & Weight Rate Engine**: Automatically computes dimensional weight vs. dead weight to determine billed weight, applying base rates, per-kg surcharges, and COD fees dynamically based on configured zone-to-zone rate cards.
- 🗺️ **Operational Zone Management**: Divides operational territories into distinct zones with configurable B2B and B2C rate cards for intra-zone and inter-zone movements.
- 🤖 **Automated Agent Dispatching**: Automatically assigns orders to active delivery personnel registered within the pickup zone to eliminate manual dispatch bottlenecks.
- 📜 **Immutable Tracking Audit Trail**: Append-only event history capturing every order status transition (`PENDING` $\rightarrow$ `ASSIGNED` $\rightarrow$ `PICKED_UP` $\rightarrow$ `IN_TRANSIT` $\rightarrow$ `DELIVERED` / `FAILED`) with timestamps and actor IDs.
- 🔄 **Failed Delivery & Rescheduling Workflow**: Automated workflow capturing failed delivery attempts with diagnostic reasons, triggering notifications and providing an instant customer reschedule interface.
- 🔐 **Role-Based Portals & Auth**: Secure cookie-based JWT authentication with dedicated dashboards for **Customers**, **Delivery Agents**, and **Logistics Administrators**.
- 📱 **Real-Time Public Tracking**: Clean, responsive tracking portal allowing customers to track package milestones by Order ID.

---

## 🏗 Architecture & System Design

```mermaid
flowchart TD
    subgraph Client Layer
        C[Customer Portal]
        A[Agent Portal]
        Adm[Admin Dashboard]
        T[Public Tracking Page]
    end

    subgraph Application Layer [Next.js App Router]
        API[Route Handlers / API Layer]
        Auth[JWT Auth & RBAC Middleware]
        RE[Rate Calculation Engine]
        AE[Auto-Assignment Engine]
        TM[Tracking & Audit Engine]
    end

    subgraph Data Layer
        Prisma[Prisma ORM]
        DB[(SQLite / PostgreSQL)]
    end

    C -->|Create Order & Reschedule| API
    A -->|Update Status & Fail Order| API
    Adm -->|Manage Zones & Rate Cards| API
    T -->|Query Order Status| API

    API --> Auth
    API --> RE
    API --> AE
    API --> TM

    RE --> Prisma
    AE --> Prisma
    TM --> Prisma
    Prisma --> DB
```

---

## 🧮 Core Logic & Mathematical Engines

### 1. Volumetric Weight Calculation
Logistics cargo requires vehicle volume allocation. The platform computes dimensional weight using the standard international freight divisor:

$$\text{Volumetric Weight (kg)} = \frac{\text{Length (cm)} \times \text{Breadth (cm)} \times \text{Height (cm)}}{5000}$$

### 2. Chargeable (Billed) Weight
The billable weight is determined dynamically as the higher value between actual dead weight and volumetric weight:

$$\text{Billed Weight} = \max(\text{Actual Weight (kg)}, \text{Volumetric Weight (kg)})$$

### 3. Dynamic Tariff Quotation
The rate engine queries the `RateCard` matching `(sourceZoneId, destinationZoneId, orderType)`:

$$\text{Total Charge} = \text{Base Rate} + (\text{Billed Weight} \times \text{Weight Rate}) + \left( \mathbb{I}_{\text{COD}} \times \text{COD Surcharge} \right)$$

*Where $\mathbb{I}_{\text{COD}} = 1$ if payment method is COD, else $0$.*

---

## 👥 User Roles & Permissions

| Role | Permissions & Capabilities |
|---|---|
| **`CUSTOMER`** | Create new delivery orders, view real-time shipping quotations, track order milestones, view history, and reschedule failed deliveries. |
| **`AGENT`** | View assigned pickup/delivery tasks within their registered zone, transition order statuses (`PICKED_UP`, `IN_TRANSIT`, `DELIVERED`, `FAILED`), and log failure notes. |
| **`ADMIN`** | Full visibility over all platform orders, create and edit operational delivery zones, and configure dynamic rate cards for B2B/B2C routes. |

---

## 🗄 Database Schema & Data Model

```
┌─────────────────┐       ┌─────────────────┐
│      User       │       │      Zone       │
├─────────────────┤       ├─────────────────┤
│ id              │◄──┐   │ id              │◄────────┐
│ email           │   │   │ name            │         │
│ passwordHash    │   │   │ areas (JSON)    │         │
│ role            │   │   └─────────────────┘         │
│ zoneId          ├───┼───────────────────────────────┤
└─────────────────┘   │                               │
                      │   ┌───────────────────────────┼──────────────┐
                      │   │         RateCard          │              │
                      │   ├───────────────────────────┼──────────────┤
                      │   │ id                        │              │
                      │   │ sourceZoneId ─────────────┘              │
                      │   │ destinationZoneId ───────────────────────┘
                      │   │ orderType (B2B / B2C)     │
                      │   │ baseRate / weightRate     │
                      │   │ codSurcharge              │
                      │   └───────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────┐
│                        Order                        │
├─────────────────────────────────────────────────────┤
│ id, trackingNumber, customerId, agentId             │
│ pickupAddress, dropAddress, pickupZoneId, dropZoneId│
│ length, breadth, height, actualWeight               │
│ volumetricWeight, billedWeight                      │
│ orderType (B2B/B2C), paymentType (PREPAID/COD)      │
│ totalCharge, status (PENDING/ASSIGNED/DELIVERED/...)│
└──────────────────────┬──────────────────────────────┘
                       │ 1:N
┌──────────────────────▼──────────────────────────────┐
│                    OrderTracking                    │
├─────────────────────────────────────────────────────┤
│ id, orderId, status, actorId, message, timestamp    │
└─────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Actions, Route Handlers)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [SQLite](https://www.sqlite.org/) (configurable to PostgreSQL via Prisma)
- **ORM**: [Prisma ORM 7](https://www.prisma.io/)
- **Authentication**: JWT Cookies + [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Lucide React Icons](https://lucide.dev/)

---

## 📂 Project Structure

```
last-mile-tracker/

├── prisma/
│   ├── schema.prisma              # Database schema (Users, Zones, RateCards, Orders, Tracking)
│   └── dev.db                     # SQLite database
├── src/
│   ├── app/
│   │   ├── api/                   # REST API routes (auth, orders, rate-cards, zones)
│   │   ├── dashboard/             # Role-based dashboards (Admin, Agent, Customer)
│   │   ├── track/                 # Public tracking page
│   │   ├── login/                 # Authentication pages
│   │   └── page.tsx               # Landing page
│   ├── components/                # Modular UI components
│   └── lib/
│       ├── assignment-engine.ts   # Auto-assignment logic
│       ├── auth.ts                # JWT authentication utilities
│       ├── db.ts                  # Prisma client instance
│       └── rate-engine.ts         # Volumetric weight & charge calculator
├── README.md                      # Detailed project documentation
└── package.json                   # Project dependencies & scripts
```

---

## 📡 API Reference

### Authentication Endpoints
- `POST /api/auth/register` — Register a new customer, agent, or administrator.
- `POST /api/auth/login` — Authenticate credentials and issue HTTP-only JWT token.
- `POST /api/auth/logout` — Invalidate user session cookie.

### Delivery Zones & Rate Cards
- `GET /api/zones` — List all active operational zones.
- `POST /api/zones` — Create a new operational zone.
- `GET /api/rate-cards` — Retrieve all configured rate cards.
- `POST /api/rate-cards` — Define base and per-kg tariffs between source and destination zones.

### Orders & Tracking
- `GET /api/orders` — List orders (supports filters: `customerId`, `agentId`, `status`).
- `POST /api/orders` — Create order (runs volumetric calculator and auto-assignment).
- `GET /api/orders/[id]` — Fetch detailed order summary and immutable tracking log.
- `PATCH /api/orders/[id]/status` — Transition package lifecycle state and append audit event.

---

## 💻 Installation & Local Setup

```bash
# Extract the project archive
unzip LastMile_Delivery_Tracker_SourceCode.zip
cd last-mile-tracker

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Initialize database schema
npx prisma db push
npx prisma generate

# Run the development server
npm run dev
```

Visit `http://localhost:3000` to launch the application.

---

## ⚙️ Environment Variables

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secure-jwt-secret-key"
NODE_ENV="development"
```

---

## 🚢 Deployment Guide

### Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set your `DATABASE_URL` and `JWT_SECRET` in Vercel Environment Variables.
4. If using PostgreSQL in production:
   - Update `provider = "postgresql"` in `prisma/schema.prisma`.
   - Set `DATABASE_URL="postgres://user:password@host:port/dbname"`.

---

## 👨‍💻 Author

**Shubham Bhuyan**

B.Tech – VIT Chennai

GitHub: https://github.com/curiex7

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!


