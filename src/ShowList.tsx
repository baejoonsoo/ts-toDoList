import { useState } from "react";
import Word from "./Word";

type data = {
  id: number;
  content: string;
  toDo: boolean;
};

const ShowList = ({ listData }: { listData: data[] }) => {
  return (
    <div>
      {listData.map((data: data) => {
        return <Word data={data} />;
      })}
    </div>
  );
};

export default ShowList;
