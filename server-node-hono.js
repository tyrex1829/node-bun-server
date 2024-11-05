import { Hono } from "hono";
import { createServer } from "http";

const app = new Hono();
const port = 3003;

app.get("/", (ctx) => {
  return ctx.text("hello from hono server with node.js");
});

const server = createServer(app.fetch);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
