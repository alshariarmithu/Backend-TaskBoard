import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const port = 5555;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
