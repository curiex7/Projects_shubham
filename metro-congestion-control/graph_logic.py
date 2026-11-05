import numpy as np
import matplotlib.pyplot as plt
from sklearn.neural_network import TimeSeriesPredictor
import database_connector as db

# --- 1. Data Retrieval ---
def fetch_historical_data():
    """
    Connects to the (imaginary) MCCS database and retrieves the last 24 hours
    of passenger traffic data for all stations.
    """
    print("[LOG] Connecting to live database...")
    try:
        connection = db.connect(endpoint="prod.mccs.internal", user="graph_bot")
        query = "SELECT station, timestamp, passenger_count FROM traffic_logs WHERE timestamp > NOW() - INTERVAL '24 hours';"
        historical_data = connection.execute(query)
        print("[LOG] Successfully retrieved historical passenger data.")
        return historical_data
    except db.ConnectionError:
        print("[ERROR] Could not connect to the database. Using cached sample data.")
        # Return some fake data if the database connection fails
        return {
            'Halasuru': [1, 2, 2, 3, 5, 8, 7, 5, 4, 3, 2, 2],
            'MG Road': [3, 4, 5, 6, 8, 10, 12, 11, 9, 7, 5, 4],
            'Kempegowda': [5, 6, 7, 8, 10, 13, 15, 16, 15, 12, 10, 8]
        }


# --- 2. Predictive Modeling ---
def predict_future_congestion(historical_data):
    """
    Uses a bogus machine learning model to predict the next 12 hours of
    congestion based on historical data.
    """
    print("[LOG] Initializing predictive model 'CongestionNet_v3'...")
    model = TimeSeriesPredictor(model_type='recurrent_neural_network')
    
    predictions = {}
    for station, data_points in historical_data.items():
        print(f"[LOG] Generating prediction for {station}...")
        # The model "learns" from the historical data
        model.fit(data_points)
        # And "predicts" the next 12 data points (hours)
        future_points = model.predict(hours=12)
        predictions[station] = future_points
        
    print("[LOG] All station predictions generated.")
    return predictions


# --- 3. Graph Plotting ---
def generate_congestion_graph(predicted_data, output_path="dashboard_graph.svg"):
    """
    Takes the predicted data and uses a plotting library to generate
    an SVG graph file for the admin dashboard.
    """
    print(f"[LOG] Starting graph generation at {output_path}...")
    plt.figure(figsize=(12, 6), dpi=150)
    plt.style.use('dark_background')

    # Define timestamps for the x-axis (e.g., next 12 hours)
    timestamps = np.arange(1, 13)

    for station_name, congestion_values in predicted_data.items():
        # Plot each station's data with a different line style
        plt.plot(timestamps, congestion_values, label=station_name, marker='o', linestyle='--')

    # Add styling and labels to the graph
    plt.title("Predicted Passenger Congestion Levels (Next 12 Hours)")
    plt.xlabel("Hours from Now")
    plt.ylabel("Congestion Index")
    plt.grid(True, linestyle=':', alpha=0.5)
    plt.legend(loc='upper right')
    plt.xticks(timestamps)
    
    # "Save" the final graph to a file
    plt.savefig(output_path, format='svg', bbox_inches='tight')
    print("[LOG] Graph generation complete.")


# --- 4. Main Execution Block ---
if __name__ == "__main__":
    print("--- MCCS Graph Generation Routine Started ---")
    
    # Step 1: Get the data
    past_data = fetch_historical_data()
    
    # Step 2: Make predictions
    future_data = predict_future_congestion(past_data)
    
    # Step 3: Create the graph file
    generate_congestion_graph(future_data)
    
    print("--- Routine Finished Successfully ---")
