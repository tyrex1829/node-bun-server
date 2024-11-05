import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello Coffee", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Hello its Ice Tea", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 3001,
  hostname: "127.0.0.1",
});

// not a good dev experience.
