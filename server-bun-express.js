import express from "express";

const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.json({
    msg: `Home route`,
  });
});

app.listen(port);
