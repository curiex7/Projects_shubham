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
