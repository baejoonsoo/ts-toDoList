import { useState } from "react";
import { wordProps } from "../interfaces/showList";

const Word = ({ data }: wordProps) => {
  const [toDo, setToDo] = useState<boolean>(data.toDo);

  const changeDoTo = () => {
    setToDo(!toDo);
  };

  return (
    <div>
      <span>{data.content}</span>
      <input type="checkbox" readOnly checked={toDo} onClick={changeDoTo} />
    </div>
  );
};

export default Word;
