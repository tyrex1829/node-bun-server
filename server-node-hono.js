import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
const port = 3004;

app.get("/", (ctx) => {
  return ctx.text("hello from hono server with node.js");
});

// serve(app, (info) => {
//   console.log(`Listening on http://localhost:${info.port}`);
// });

app.get("/data", (ctx) => {
  return ctx.json({ msg: "data route in node-hono server" });
});

app.get("/user/:id", (ctx) => {
  const userId = ctx.req.param("id");
  return ctx.json({
    user: userId,
  });
});

serve({
  fetch: app.fetch,
  port: port,
});

console.log(`Listening on http://localhost:${port}`);
