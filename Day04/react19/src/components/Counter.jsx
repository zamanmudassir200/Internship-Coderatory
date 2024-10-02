import React, { useState } from "react";
import Button from "./Button.jsx";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold my-3">Counter App</h1>
      <div className="my-7 flex items-center justify-center gap-4">
        <Button text={"Decrement"} onClick={() => setCount(count - 1)} />
        <p className="text-xl font-semibold">{count}</p>
        <Button text={"Increment"} onClick={() => setCount(count + 1)} />
      </div>
    </>
  );
};

export default Counter;
