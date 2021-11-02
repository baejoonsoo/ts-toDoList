import { useEffect, useState } from 'react';
import { request } from '../api/axios';
import { dataListType } from '../interfaces/showList';
import Word from './Word';
import * as S from './style';
import ChangeModal from './ChangeModal';
import axios from 'axios';

const ShowList = () => {
  const [dataList, setDataList] = useState<dataListType[]>([]);

  useEffect(() => {
    request<dataListType[]>('', 'get', {})
      .then((res) => {
        setDataList(res);
      })
      .catch((err: Error) => {
        alert(`error`);
      });
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [patchData, setPatchData] = useState<dataListType>();
  const changeData = (data: dataListType) => {
    console.log(data);
    setPatchData(data);
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && <ChangeModal data={patchData} />}
      <S.Main>
        {dataList.length !== 0 ? (
          dataList.map((data) => {
            return <Word data={data} key={data.id} changeData={changeData} />;
          })
        ) : (
          <h2>목록이 비어있습니다</h2>
        )}
      </S.Main>
    </div>
  );
};

export default ShowList;
