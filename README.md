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


## Conclusion

This microservice efficiently solves a real-world logistics optimization problem using a standard algorithmic approach. It demonstrates backend development skills including API handling, middleware usage, and algorithm implementation.


