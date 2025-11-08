import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import reducer, { fetchPosts } from "./posts-slice";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

describe("postsSlice", () => {
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle fetchPosts fulfilled", async () => {
    const posts: Post[] = [
      { userId: 1, id: 1, title: "Post 1", body: "Content 1" },
      { userId: 1, id: 2, title: "Post 2", body: "Content 2" },
    ];

    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(200, posts);

    const store = configureStore({ reducer: { posts: reducer } });

    await store.dispatch(fetchPosts() as any);

    const state = store.getState().posts;

    expect(state.posts).toEqual(posts);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle fetchPosts rejected", async () => {
    mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(500);

    const store = configureStore({ reducer: { posts: reducer } });

    await store.dispatch(fetchPosts() as any);

    const state = store.getState().posts;

    expect(state.posts).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeDefined();
  });

  it("should handle fetchPosts pending", () => {
    const action = { type: fetchPosts.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });
});
