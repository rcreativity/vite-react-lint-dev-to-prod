import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";

import { store } from "../store";
import Posts from "./posts";

describe("posts Component", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    // Mock the GET request for posts
    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(200, [
      { userId: 1, id: 1, title: "Mock Post 1", body: "Content 1" },
      { userId: 1, id: 2, title: "Mock Post 2", body: "Content 2" },
    ]);
  });

  afterEach(() => {
    mock.restore();
  });

  it("renders mocked posts", async () => {
    render(
      <Provider store={store}>
        <Posts />
      </Provider>,
    );

    // Check loading text first
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for posts to appear
    await waitFor(() => {
      expect(screen.getByText("Mock Post 1")).toBeInTheDocument();
      expect(screen.getByText("Mock Post 2")).toBeInTheDocument();
    });
  });
});
