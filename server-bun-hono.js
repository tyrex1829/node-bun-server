import { serve } from "bun";
import { Hono } from "hono";

const app = new Hono();
const port = 3005;

app.get("/", (ctx) => {
  return ctx.text("hono with bun server");
});

serve({
  fetch: app.fetch,
  port: port,
});

console.log(`Server is running on http://localhost:${port}`);
