import "@testing-library/jest-dom";
import { setupServer } from "msw/node";

import { handlers } from "./mocks/handlers";

export const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Stop server after all tests
afterAll(() => server.close());
