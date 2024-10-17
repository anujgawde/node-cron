const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const app = express();

// Schedule a task to run every 3 minutes
cron.schedule("*/3 * * * *", async () => {
  try {
    console.log("Running the cron job every 3 minutes and calling the API...");

    // Carry out the activities you want periodically:
    // In this case, I am using this cron job to keep my server alive which goes down with a few minutes of inactivity
    const primeBackendResponse = await axios.get(
      "https://prime-backend.onrender.com/"
    );
    const nodeCronResponse = await axios.get(
      "https://node-cron-5295.onrender.com/"
    );

    // Another link will be called, which will be this application's link
  } catch (error) {
    console.error("Error occurred while calling the API:", error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Cron Job Runs Every 3 Minutes!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
