const express = require("express");
const { fetchDepots } = require("./apiService");
const { scheduleTasks } = require("./scheduler");
const logger = require("../logging_middleware/logger");
app.use(logger);

const app = express();
const PORT = 3000;

app.get("/schedule", async (req, res) => {
    const depots = await fetchDepots();

    if (!depots.length) {
        return res.status(500).json({ message: "No data" });
    }

    // Example: Take first depot
    const depot = depots[0];

    const tasks = depot.tasks.map(task => ({
        duration: task.duration,
        score: task.importance
    }));

    const maxHours = depot.available_hours;

    const result = scheduleTasks(tasks, maxHours);

    res.json({
        maxScore: result
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});