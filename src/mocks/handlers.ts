// src/mocks/handlers.ts
import { http } from "msw";

// need to work i=on this, now used axios mock
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { userId: 1, id: 1, title: "Mock Post 1", body: "This is a mocked post." },
        { userId: 1, id: 2, title: "Mock Post 2", body: "Another mocked post." },
      ]),
    );
  }),
];
