const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Parent+ Cameroon API", version: "1.0.0" });
});

app.get("/api/modules", (req, res) => {
  res.json([
    { id: 1, title: "Understanding Your Child's Emotions", category: "Emotional support" },
    { id: 2, title: "Positive Communication at Home", category: "Communication" },
    { id: 3, title: "Discipline Without Violence", category: "Positive discipline" }
  ]);
});

app.post("/api/feedback", (req, res) => {
  // Prototype only: replace with database persistence during MVP implementation.
  res.status(201).json({ message: "Feedback received", data: req.body });
});

app.listen(PORT, () => {
  console.log(`Parent+ Cameroon running at http://localhost:${PORT}`);
});
