import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
const port = 3004;

app.get("/", (ctx) => {
  return ctx.text("hello from hono server with node.js");
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
