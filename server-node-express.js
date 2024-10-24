import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "Home Route",
  });
});

app.get("/search", (req, res) => {
  const q = req.query.q;
  const sort = req.query.sort;

  res.json({
    search: `${q}, ${sort}`,
  });
});

app.listen(port);
