import React, { useState } from "react";

const ConditionalRendering = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="my-7">
      {user ? (
        <div className="">Welcome to My website</div>
      ) : (
        <div className="">Please login to see my website</div>
      )}
    </div>
  );
};

export default ConditionalRendering;
