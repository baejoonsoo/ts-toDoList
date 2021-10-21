import { useEffect, useState } from 'react';
import { request } from '../hook/axios';
import { dataListType } from '../interfaces/showList';
import Word from './Word';

interface obj {
  content: string;
  toDo: boolean;
  id: number;
}

const ShowList = () => {
  const [dataList, setDataList] = useState<dataListType[]>([]);

  useEffect(() => {
    request('', 'get', {})
      .then((res: obj[]) => {
        console.log('res');
        console.log(res);
        setDataList(res);
      })
      .catch((err) => {
        console.info(err);
        alert(`error`);
      });
  }, []);

  return (
    <main>
      <div>
        {dataList.length !== 0 ? (
          dataList.map((data) => {
            return <Word data={data} key={data.id} />;
          })
        ) : (
          <h2>목록이 비어있습니다</h2>
        )}
      </div>
    </main>
  );
};

export default ShowList;
