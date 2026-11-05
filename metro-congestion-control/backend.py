import random
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_initial_state():
    station_names = ['Halasuru', 'Trinity', 'MG Road', 'Cubbon Park', 'Kempegowda', 'KSR City']
    staff_list = [
        {'id': 'S01', 'name': 'Anjali', 'station': 'MG Road', 'duty': 'Security', 'isAssigned': False}, {'id': 'S02', 'name': 'Bipin', 'station': 'MG Road', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S03', 'name': 'Chirag', 'station': 'Kempegowda', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S04', 'name': 'Divya', 'station': 'Halasuru', 'duty': 'Customer Assistance', 'isAssigned': False},
        {'id': 'S05', 'name': 'Eshwar', 'station': 'Trinity', 'duty': 'Security', 'isAssigned': False}, {'id': 'S06', 'name': 'Farah', 'station': 'KSR City', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S07', 'name': 'Girish', 'station': 'Cubbon Park', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S08', 'name': 'Hema', 'station': 'Kempegowda', 'duty': 'Customer Assistance', 'isAssigned': False},
        {'id': 'S09', 'name': 'Imran', 'station': 'MG Road', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S10', 'name': 'Jyoti', 'station': 'Trinity', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S11', 'name': 'Karan', 'station': 'Halasuru', 'duty': 'Security', 'isAssigned': False}, {'id': 'S12', 'name': 'Lata', 'station': 'KSR City', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S13', 'name': 'Manish', 'station': 'Kempegowda', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S14', 'name': 'Nisha', 'station': 'MG Road', 'duty': 'Customer Assistance', 'isAssigned': False},
        {'id': 'S15', 'name': 'Omar', 'station': 'Trinity', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S16', 'name': 'Priya', 'station': 'Cubbon Park', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S17', 'name': 'Rahul', 'station': 'Halasuru', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S18', 'name': 'Sunita', 'station': 'KSR City', 'duty': 'Security', 'isAssigned': False},
        {'id': 'S19', 'name': 'Tarun', 'station': 'Kempegowda', 'duty': 'Wheelchair', 'isAssigned': False}, {'id': 'S20', 'name': 'Usha', 'station': 'MG Road', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S21', 'name': 'Vikram', 'station': 'Trinity', 'duty': 'Customer Assistance', 'isAssigned': False}, {'id': 'S22', 'name': 'Waseem', 'station': 'Cubbon Park', 'duty': 'Wheelchair', 'isAssigned': False},
        {'id': 'S23', 'name': 'Yasmin', 'station': 'KSR City', 'duty': 'Security', 'isAssigned': False}
    ]

    def generate_wheelchairs(staff_list):
        fleet = []
        staff_wheelchair_duty = [s for s in staff_list if s['duty'] == 'Wheelchair']
        staff_idx = 0
        for prefix in ['A', 'B', 'C']:
            for i in range(1, 10):
                is_available = random.random() > 0.3
                staff_id = None
                if not is_available:
                    staff_member = staff_wheelchair_duty[staff_idx % len(staff_wheelchair_duty)]
                    staff_id = staff_member['id']
                    staff_member['isAssigned'] = True # Mark staff as assigned from the start
                    staff_idx += 1
                fleet.append({
                    'id': f'{prefix}{i}', 'station': random.choice(station_names),
                    'isAvailable': is_available, 'staffId': staff_id
                })
        return fleet

    return {
        "settings": { "reallocation_on": True, "emergency_threshold": 30, "api_endpoint": "http://127.0.0.1:5000" },
        "stations": {
            'Halasuru':    {'id': 'HAL', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
            'Trinity':     {'id': 'TRI', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
            'MG Road':     {'id': 'MGR', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
            'Cubbon Park': {'id': 'CBP', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
            'Kempegowda':  {'id': 'KMP', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
            'KSR City':    {'id': 'KSR', 'passengers': 0, 'capacity': 2, 'buses': [], 'wheelchairs_present': 0},
        },
        "buses": [
            {'id': '500C', 'onMetroDuty': False, 'capacity': 40, 'passengers': 0, 'wheelchair': True, 'type': 'AC', 'location': 'Depot'},
            {'id': '201R', 'onMetroDuty': False, 'capacity': 35, 'passengers': 0, 'wheelchair': False, 'type': 'Non-AC', 'location': 'Depot'},
            {'id': 'KBS-1K', 'onMetroDuty': False, 'capacity': 40, 'passengers': 0, 'wheelchair': True, 'type': 'AC', 'location': 'Depot'},
            {'id': 'V-500D', 'onMetroDuty': False, 'capacity': 40, 'passengers': 0, 'wheelchair': True, 'type': 'AC', 'location': 'City Market'},
            {'id': '315E', 'onMetroDuty': False, 'capacity': 35, 'passengers': 0, 'wheelchair': False, 'type': 'Non-AC', 'location': 'Marathahalli'},
        ],
        "trains": [
            {'id': 'TRN-101', 'location': 'At Halasuru', 'coaches': 6, 'direction': 'right'}, {'id': 'TRN-102', 'location': 'Between TRI & MGR', 'coaches': 8, 'direction': 'right'},
            {'id': 'TRN-103', 'location': 'At Cubbon Park', 'coaches': 6, 'direction': 'right'}, {'id': 'TRN-104', 'location': 'At Kempegowda', 'coaches': 8, 'direction': 'right'},
            {'id': 'TRN-201', 'location': 'At KSR City', 'coaches': 6, 'direction': 'left'}, {'id': 'TRN-202', 'location': 'Between KMP & CBP', 'coaches': 6, 'direction': 'left'},
            {'id': 'TRN-203', 'location': 'At Trinity', 'coaches': 8, 'direction': 'left'}, {'id': 'TRN-204', 'location': 'At MG Road', 'coaches': 6, 'direction': 'left'}
        ],
        "staff": staff_list, "wheelchairs": generate_wheelchairs(staff_list),
        "ticket_logs": [
            {'original_station': 'MG Road', 'allotted_station': 'Cubbon Park', 'emergency': {'isEmergency': False, 'time': None}, 'bus': '500C', 'wheelchair': None},
            {'original_station': 'Trinity', 'allotted_station': 'Trinity', 'emergency': {'isEmergency': False, 'time': None}, 'bus': None, 'wheelchair': {'wheelchair_id': 'A1', 'coach': 'E'}},
            {'original_station': 'Kempegowda', 'allotted_station': 'Kempegowda', 'emergency': {'isEmergency': True, 'time': '25'}, 'bus': None, 'wheelchair': None},
        ],
        "notifications": [
            {'type': 'warning', 'message': 'Buses stuck near Halasuru gate due to heavy traffic.', 'time': '5 min ago'},
            {'type': 'info', 'message': 'Train TRN-102 running 5 minutes behind schedule.', 'time': '8 min ago'}
        ]
    }

STATE = get_initial_state()
STATIONS_LIST = list(STATE["stations"].keys())

@app.route('/admin/status', methods=['GET'])
def get_admin_status():
    for station_name in STATE['stations']: STATE['stations'][station_name]['wheelchairs_present'] = sum(1 for w in STATE['wheelchairs'] if w['station'] == station_name)
    return jsonify(STATE)

@app.route('/admin/update_settings', methods=['POST'])
def update_settings():
    new_settings = request.json
    for key, value in new_settings.items():
        if key in STATE['settings']:
            if isinstance(STATE['settings'][key], bool): STATE['settings'][key] = bool(value)
            elif isinstance(STATE['settings'][key], int): STATE['settings'][key] = int(value)
            else: STATE['settings'][key] = value
        if key.startswith('capacity_'):
            station_name = key.replace('capacity_', '')
            if station_name in STATE['stations']: STATE['stations'][station_name]['capacity'] = int(value)
    return jsonify({"status": "success", "settings": STATE['settings']})

@app.route('/check_station', methods=['POST'])
def check_station():
    station_name = request.json.get('destination_station')
    station = STATE['stations'].get(station_name)
    if not station: return jsonify({"error": "Invalid station"}), 400
    is_full = station["passengers"] >= station["capacity"]
    return jsonify({"is_full": is_full})

@app.route('/request_travel', methods=['POST'])
def request_travel():
    data = request.json
    destination = data.get('destination_station')
    is_emergency = data.get('is_emergency', False)
    if is_emergency or not STATE['settings']['reallocation_on']: return jsonify({"decision": "PROCEED", "allotted_station": destination})
    if STATE['stations'][destination]['passengers'] < STATE['stations'][destination]['capacity']: return jsonify({"decision": "PROCEED", "allotted_station": destination})
    min_fill = min(s['passengers'] for s in STATE['stations'].values())
    start_index = STATIONS_LIST.index(destination)
    for dist in range(1, len(STATIONS_LIST)):
        for direction in [-1, 1]:
            idx = start_index + (dist * direction)
            if 0 <= idx < len(STATIONS_LIST):
                neighbor = STATIONS_LIST[idx]
                if STATE['stations'][neighbor]['passengers'] == min_fill:
                    bus_to_dispatch = next((b for b in STATE['buses'] if not b['onMetroDuty']), None)
                    if bus_to_dispatch:
                        bus_to_dispatch['onMetroDuty'] = True
                        bus_to_dispatch['location'] = f"En route to {neighbor}"
                        if bus_to_dispatch['id'] not in STATE['stations'][neighbor]['buses']:
                           STATE['stations'][neighbor]['buses'].append(bus_to_dispatch['id'])
                    return jsonify({"decision": "REALLOCATE", "original_destination": destination, "allotted_station": neighbor})
    return jsonify({"decision": "PROCEED", "allotted_station": destination})


# reallocation logic
@app.route('/request_wheelchair', methods=['POST'])
def request_wheelchair():
    station = request.json.get('station')
    if not station:
        return jsonify({"error": "Station not specified for wheelchair request."}), 400

    # Step 1: Find a vacant wheelchair at the specified station
    available_wheelchair = next((w for w in STATE['wheelchairs'] if w['isAvailable'] and w['station'] == station), None)
    
    if not available_wheelchair:
        return jsonify({"error": f"No wheelchairs currently available at {station}."}), 404

    # Step 2: Find an unassigned staff member on wheelchair duty at the same station
    available_staff = next((s for s in STATE['staff'] if s['station'] == station and s['duty'] == 'Wheelchair' and not s['isAssigned']), None)

    if not available_staff:
        return jsonify({"error": f"No staff available to assist with a wheelchair at {station}."}), 404
        
    available_wheelchair['isAvailable'] = False
    available_wheelchair['staffId'] = available_staff['id']
    available_staff['isAssigned'] = True
    
    return jsonify({
        "wheelchair_id": available_wheelchair['id'],
        "coach": random.choice(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    })

@app.route('/confirm_travel', methods=['POST'])
def confirm_travel():
    log_data = request.json
    allotted_station = log_data.get('allotted_station')
    
    if allotted_station and allotted_station in STATE['stations']:
        # This logic increments the passenger count
        STATE['stations'][allotted_station]['passengers'] += 1
        # This logic adds the new booking to the top of the logs
        STATE['ticket_logs'].insert(0, log_data)
        
        # This logic adds a notification if the station is now full
        station_data = STATE['stations'][allotted_station]
        if station_data['passengers'] >= station_data['capacity']:
            STATE['notifications'].insert(0, {
                'type': 'critical',
                'message': f"{allotted_station} is now at full capacity.",
                'time': 'Just now'
            })
        
        return jsonify({"status": "success"})
    
    return jsonify({"status": "error", "message": "Invalid station provided for confirmation."}), 400

@app.route('/reset', methods=['POST'])
def reset_simulation():
    global STATE
    STATE = get_initial_state()
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)