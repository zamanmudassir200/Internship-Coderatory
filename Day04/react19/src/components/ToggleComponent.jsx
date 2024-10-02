import React from "react";
import useToggle from "../CustomHooks/useToggle.js";
import Button from "./Button.jsx";

const ToggleComponent = () => {
  const [isToggled, toggle] = useToggle();
  return (
    <div>
      <p>The value is {isToggled ? "ON" : "OFF"}</p>
      <Button text={"Toggle"} onClick={toggle} />
    </div>
  );
};

export default ToggleComponent;
