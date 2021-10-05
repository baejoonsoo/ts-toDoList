import { useState } from "react";

const Greeting = () => {
  const [data, setData] = useState<number>(0);

  const onIncrease = () => setData((data) => data + 1);
  const onDecrease = () => setData((data) => data - 1);

  return (
    <div>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
      <div>{data}</div>
    </div>
  );
};

export default Greeting;
