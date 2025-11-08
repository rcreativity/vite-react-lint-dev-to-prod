import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/home";

const Posts = React.lazy(() => import("./pages/posts"));
const Counter = React.lazy(() => import("./pages/counter"));

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/counter" style={{ marginRight: "1rem" }}>Counter</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
