import { useState } from "react";

type propType = {
  data: {
    id: number;
    content: string;
    toDo: boolean;
  };
};

const Word = ({ data }: propType) => {
  const [toDo, setToDo] = useState<boolean>(data.toDo);

  const changeDoTo = () => {
    setToDo(!toDo);
  };

  return (
    <div>
      <span>{data.content}</span>
      <input type="checkbox" checked={toDo} onClick={changeDoTo} />
    </div>
  );
};

export default Word;
