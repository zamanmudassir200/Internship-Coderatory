import React from "react";
import ToggleComponent from "./ToggleComponent";
import UseFetch from "./UseFetch";

const LearnCustomHooks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-3">LearnCustomHooks</h1>
      --------------------------------------
      <h2 className="font-semibold">1. useToggle Hook</h2>
      <div className="">
        <ToggleComponent />
      </div>
      --------------------------------------
      <h2 className="font-semibold"> 2. useFetch Hook</h2>
      <div className="">
        <UseFetch />
      </div>
    </div>
  );
};

export default LearnCustomHooks;
