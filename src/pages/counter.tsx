import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";

import { decrement, increment, incrementByAmount, reset } from "../store/slices/counter-slice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>
        Counter:
        {count}
      </h2>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      <button type="button" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button type="button" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
