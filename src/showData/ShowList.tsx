import { useEffect, useState } from "react";
import { request } from "../axios/axios";
import { dataListType } from "../interfaces/showList";
import Word from "./Word";

const ShowList = () => {
  const [dataList, setDataList] = useState<dataListType[]>([]);

  useEffect(() => {
    request("get", {})
      .then((res: any) => {
        console.log(res);
        setDataList(res);
      })
      .catch((err) => {
        alert(`error`);
      });
  }, []);

  return (
    <div>
      {dataList.map((data) => {
        return <Word data={data} key={data.id} />;
      })}
    </div>
  );
};

export default ShowList;
