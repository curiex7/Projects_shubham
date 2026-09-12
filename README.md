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

A modern, full-stack delivery management and tracking platform built with **Next.js 15 (App Router)**, **Prisma ORM**, **SQLite**, and **Tailwind CSS**. The system automates dynamic delivery rate calculations based on volumetric and actual weights, intelligently assigns delivery agents based on geographical operational zones, maintains an immutable audit trail for order status transitions, and handles failed delivery reschedule workflows.

---

## 📌 Project Overview

Last-mile logistics often encounter challenges such as inaccurate shipping fee calculations, manual assignment bottlenecks, lack of transparent package tracking, and unorganized failed delivery handling.

This project delivers an end-to-end automated platform featuring:
- **Dynamic Rate Engine**: Computes volumetric vs. actual billed weight, base charges, per-kg weight charges, and COD surcharges.
- **Zone-Based Auto-Assignment**: Automatically matches orders to active delivery agents in the pickup zone.
- **Immutable Tracking Audit Trail**: Complete historical record of every package milestone with actor and timestamp logging.
- **Role-Based Portals**: Dedicated interfaces for Customers (create/track orders), Delivery Agents (update status/handle failures), and Admins (manage zones, rate cards, and all shipments).

---

## ✨ Features

- 🚚 **Dynamic Volumetric & Weight Rate Calculation**: Automatic calculation using $(L \times W \times H) / 5000$ formula.
- 📍 **Zone & Route Management**: Granular rate card configuration for B2B and B2C shipment types between source and destination zones.
- 🤖 **Automated Agent Dispatching**: Real-time assignment of delivery personnel based on pickup location.
- 📜 **Immutable Order Audit History**: Tamper-proof tracking logs for all state transitions (`PENDING` $\rightarrow$ `ASSIGNED` $\rightarrow$ `PICKED_UP` $\rightarrow$ `IN_TRANSIT` $\rightarrow$ `DELIVERED` / `FAILED`).
- 🔄 **Failed Delivery & Re-attempt Workflow**: Automated notification simulation and customer rescheduling mechanism.
- 🔐 **Role-Based Authentication**: JWT cookie-based access control with `ADMIN`, `CUSTOMER`, and `AGENT` roles.
- 📊 **Responsive Dashboard**: Clean UI designed with Tailwind CSS and Next.js App Router.

---

## 🛠 Technologies Used

- **Framework**: Next.js 15+ (App Router, Server Actions, Route Handlers)
- **Language**: TypeScript
- **Database & ORM**: SQLite + Prisma ORM
- **Authentication**: JWT & HTTP-Only Cookies
- **Styling**: Tailwind CSS, Lucide Icons
- **Architecture**: Next.js Fullstack Serverless Architecture

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

## ⚙️ System Workflow & Architecture

1. **Order Creation**: Customer enters shipment dimensions ($L \times W \times H$), actual weight, pickup/drop zones, and payment method (Prepaid/COD).
2. **Rate Computation**: The system evaluates:
   - $\text{Volumetric Weight} = \frac{L \times W \times H}{5000}$
   - $\text{Billed Weight} = \max(\text{Actual Weight}, \text{Volumetric Weight})$
   - $\text{Total Charge} = \text{Base Rate} + (\text{Billed Weight} \times \text{Per-Kg Rate}) + \text{COD Surcharge (if COD)}$
3. **Agent Assignment**: Queries active agents in the pickup zone and assigns the shipment.
4. **Milestone Progression**: Agents update package status with live timestamped tracking records.
5. **Exception Handling**: Failed deliveries trigger alert logs and enable customer rescheduling.

---

## 📡 API Endpoints

- `POST /api/auth/register` - Register customer/agent/admin
- `POST /api/auth/login` - Secure login & token generation
- `GET /api/zones` & `POST /api/zones` - Manage delivery zones
- `GET /api/rate-cards` & `POST /api/rate-cards` - Configure zone-to-zone tariffs
- `GET /api/orders` & `POST /api/orders` - Place and filter shipments
- `PATCH /api/orders/:id/status` - Update delivery lifecycle status

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

