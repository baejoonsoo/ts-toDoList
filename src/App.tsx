import { useState } from "react";
import AddData from "./AddData";
import ShowList from "./ShowList";

type data = {
  id: number;
  content: string;
  toDo: boolean;
};

const App = () => {
  const [data, setData] = useState<data[]>([
    {
      id: 1,
      content: "ts study",
      toDo: true,
    },
  ]);
  return (
    <div>
      <ShowList listData={data} />
      <AddData setData={setData} list={data} />
    </div>
  );
};

export default App;
