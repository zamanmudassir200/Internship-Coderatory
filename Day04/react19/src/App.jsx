import React from "react";
import LearnProps from "./components/LearnProps";
import Counter from "./components/Counter";
import HandleEvents from "./components/HandleEvents";
import FormHandling from "./components/FormHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import FetchingData from "./components/FetchingData";
import LearnCustomHooks from "./components/LearnCustomHooks";

const App = () => {
  return (
    <center className="bg-slate-200">
      <LearnProps name={"Mudassir"} />
      <hr />
      <Counter />
      <hr />
      <HandleEvents />
      <hr />
      <FormHandling />
      <hr />
      <ConditionalRendering />
      <hr />
      <FetchingData />
      <br />
      <LearnCustomHooks />
    </center>
  );
};

export default App;
