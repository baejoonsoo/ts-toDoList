import { useState } from 'react';
import { request } from '../api/axios';
import { dataListType, wordProps } from '../interfaces/showList';
import * as S from './style';

const Word = ({ data }: wordProps) => {
  const [word, setWord] = useState<number>(data.id);
  const [toDo, setToDo] = useState<boolean>(data.toDo);

  const changeDoTo = () => {
    request(`${word}`, 'patch', {
      toDo: !toDo,
    });
    setToDo(!toDo);
  };

  const del = () => {
    if (window.confirm('정말로 삭제하시겠습니다?')) {
      request(`${data.id}`, 'delete', {})
        .then((res: dataListType[]) => {
          console.log(`목록이 삭제되었습니다`);

          setWord(0);
        })
        .catch((err: Error) => {
          alert('실패하였습니다!!!');
        });
    }
  };

  if (word === 0) {
    return null;
  }

  return (
    <S.WordBox>
      <S.ToDocheck>
        <S.T>
          <input type="checkbox" readOnly checked={toDo} onClick={changeDoTo} />
        </S.T>
        <span>{data.content}</span>
      </S.ToDocheck>
      <S.DelBtn onClick={del}>삭제하기</S.DelBtn>
    </S.WordBox>
  );
};

export default Word;
