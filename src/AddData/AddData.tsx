import { useState } from 'react';
import { request } from '../api/axios';
import { dataListType } from '../interfaces/showList';
import * as S from './style';

const AddData = () => {
  const [content, setContent] = useState<string>('');

  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const addContent = () => {
    if (content.length === 0) {
      alert('최소 1글자는 입력해야 합니다!!');
      return null;
    }
    request('', 'post', {
      content: content,
      toDo: false,
    })
      .then((res: dataListType[]) => {
        alert('목록이 추가되었습니다');
        window.location.reload();
      })
      .catch((err: Error) => {
        alert('목록 생성에 실패하였습니다');
        setContent('');
      });
  };

  return (
    <S.AddScreen>
      <S.ContentInput
        maxLength={50}
        placeholder="최대 50글자"
        value={content}
        onChange={changeContent}
      />
      <S.SubmitBtn onClick={addContent}>추가하기</S.SubmitBtn>
    </S.AddScreen>
  );
};

export default AddData;
