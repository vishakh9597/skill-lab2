const cron = require("node-cron");
const { expenses } = require("./data");
const { generateSummary } = require("./utils/summaries");

// CRON job to log summaries daily at midnight
cron.schedule("0 0 * * *", () => {
  const summary = generateSummary(expenses);
  console.log("Daily Summary:", { date: new Date(), summary });
});
