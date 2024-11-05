import express from "express";

const app = express();
const port = 3002;

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

app.get("/header", (req, res) => {
  const auth = req.headers.abc;

  if (auth === "abc xyz") {
    res.json({
      msg: "auth",
    });
  } else {
    res.json({
      msg: "no auth",
    });
  }
});

app.listen(port);
