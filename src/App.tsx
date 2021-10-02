import { useState } from "react";
import Greeting from "./Greeting";

const App = () => {
  const [data, setData] = useState<number>(0);
  const addCount = () => {
    setData(data + 1);
  };
  return (
    <div>
      <Greeting name={"bae"} age={17} onClick={addCount} />
      <button>{data}</button>
    </div>
  );
};

export default App;
