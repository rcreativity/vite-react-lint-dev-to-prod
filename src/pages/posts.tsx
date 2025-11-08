import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";

import { fetchPosts } from "../store/slices/posts-slice";

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading)
    return <p>Loading posts...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h2>Posts from JSONPlaceholder</h2>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
