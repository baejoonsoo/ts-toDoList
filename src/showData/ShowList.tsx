import { useEffect, useState } from 'react';
import { request } from '../hook/axios';
import { dataListType } from '../interfaces/showList';
import Word from './Word';

const ShowList = () => {
  const [dataList, setDataList] = useState<dataListType[]>([]);

  useEffect(() => {
    request('', 'get', {})
      .then((res: any) => {
        setDataList(res);
      })
      .catch((err) => {
        console.info(err);
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
