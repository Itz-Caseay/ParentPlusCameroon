const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const apiRouter = express.Router();
const projectRoot = __dirname.endsWith("/api") ? path.resolve(__dirname, "..") : __dirname;

app.use(express.json());
app.use(express.static(projectRoot));

apiRouter.get("/health", (req, res) => {
  res.json({ ok: true, service: "Parent+ Cameroon API", version: "1.0.0" });
});

apiRouter.get("/modules", (req, res) => {
  res.json([
    { id: 1, title: "Understanding Your Child's Emotions", category: "Emotional support" },
    { id: 2, title: "Positive Communication at Home", category: "Communication" },
    { id: 3, title: "Discipline Without Violence", category: "Positive discipline" }
  ]);
});

apiRouter.post("/feedback", (req, res) => {
  // Prototype only: replace with database persistence during MVP implementation.
  res.status(201).json({ message: "Feedback received", data: req.body });
});

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(projectRoot, "index.html"));
});

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(projectRoot, "index.html"));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Parent+ Cameroon running at http://localhost:${PORT}`);
  });
}

module.exports = app;
