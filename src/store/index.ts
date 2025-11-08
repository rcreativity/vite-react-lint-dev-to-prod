import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counter-slice";
import postsReducer from "./slices/posts-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

// Type helpers for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
