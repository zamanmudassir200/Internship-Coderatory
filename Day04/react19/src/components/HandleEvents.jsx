import React, { useState } from "react";
import Button from "./Button.jsx";

const HandleEvents = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark && "bg-black text-white"} py-7`}>
      <h1 className="text-2xl font-bold my-3">Handling Events</h1>
      <Button text={"Toggle Theme"} onClick={() => setDark(!dark)} />
    </div>
  );
};

export default HandleEvents;
