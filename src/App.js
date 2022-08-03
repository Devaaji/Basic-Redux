import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  descrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const handleTambah = () => {
    dispatch(increment());
  };
  const handleKurang = () => {
    dispatch(descrement());
  };

  return (
    <div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button aria-label="Increment value" onClick={handleTambah}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={handleKurang}>
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;
