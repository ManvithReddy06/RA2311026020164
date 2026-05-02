# Vehicle Maintenance Scheduler Microservice

## Overview

This project is a backend microservice designed to optimize daily vehicle maintenance scheduling for a logistics company.

Each vehicle maintenance task includes:

* Service Duration (in hours)
* Importance Score

Given limited mechanic hours per day, the system selects the optimal subset of tasks to:

* Maximize total importance score
* Stay within available time constraints

---

## Problem Statement

A depot receives multiple maintenance requests daily. However, due to limited mechanic availability, not all tasks can be completed.

The goal is to:

* Select tasks such that total time ≤ available mechanic hours
* Maximize total importance score

This problem is solved using the 0/1 Knapsack Algorithm (Dynamic Programming).

---

## Project Structure

```
backend/
│
├── logging_middleware/
│   └── logger.js
│
├── vehicle_maintenance_scheduler/
│   ├── apiService.js
│   ├── scheduler.js
│   └── index.js
│
├── notification_app_be/
│
├── notification_system_design.md
│
└── .gitignore
```

---

## Tech Stack

* Node.js
* Express.js
* Axios
* JavaScript (ES6)

---

## API Integration

### Depot API (GET)

```
http://20.207.122.201/evaluation-service/depots
```

* Fetches depot details and maintenance tasks
* No database storage required

---

## Approach

1. Fetch depot and task data from API
2. Extract:

   * Duration (weight)
   * Importance score (value)
3. Apply Dynamic Programming (Knapsack)
4. Return the optimal result

---

## How to Run

### 1. Clone Repository

```
git clone <your-repo-link>
cd vehicle_maintenance_scheduler
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Server

```
node index.js
```

### 4. Test API

```
GET http://localhost:3000/schedule
```

---

## Sample Output

```
{
  "maxScore": 120
}
```

---

## Logging Middleware

A simple middleware logs incoming API requests such as:

```
GET /schedule
```

---

## Features

* Optimized scheduling using Knapsack algorithm
* External API integration
* Modular backend structure
* Logging middleware
* Scalable and clean design
<img width="1600" height="841" alt="Image" src="https://github.com/user-attachments/assets/83dbe816-c8b8-4d30-9e3d-79214c4c29cb" />
<img width="1600" height="854" alt="image" src="https://github.com/user-attachments/assets/47248443-09b4-43d4-a038-f85bcdfad227" />
<img width="1600" height="846" alt="image" src="https://github.com/user-attachments/assets/9f0b53d7-a3dc-4bea-91ac-e5b13d89d782" />
<img width="1600" height="852" alt="image" src="https://github.com/user-attachments/assets/132e52ea-222e-4483-8862-32432137c7dc" />
<img width="1600" height="669" alt="image" src="https://github.com/user-attachments/assets/7818f3aa-01f2-4c5c-9b17-7a173f3a7fda" />







## Conclusion

This microservice efficiently solves a real-world logistics optimization problem using a standard algorithmic approach. It demonstrates backend development skills including API handling, middleware usage, and algorithm implementation.


