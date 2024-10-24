import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({
    msg: `Home route`,
  });
});

app.listen(port);
