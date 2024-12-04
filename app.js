const express = require("express");
const bodyParser = require("body-parser");
const expenseRoutes = require("./routes/expenseRoutes");
const cron = require("./cron");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/expenses", expenseRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Expense Tracker API running on http://localhost:${port}`);
});
