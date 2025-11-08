import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default postsSlice.reducer;
