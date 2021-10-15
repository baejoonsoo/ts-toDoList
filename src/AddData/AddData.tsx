import { useState } from 'react';
import { request } from '../hook/axios';
import * as S from './style';

const AddData = () => {
  const [content, setContent] = useState<string>('');

  const changeContent = (e: any) => {
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
      .then((res) => {
        alert('목록이 추가되었습니다');
        window.location.reload();
      })
      .catch((err) => {
        alert('목록 생성에 실패하였습니다');
        setContent('');
      });
  };

  return (
    <S.Fixed>
      <S.ContentInput
        maxLength={50}
        placeholder="최대 50글자"
        value={content}
        onChange={changeContent}
      />
      <S.SubmitBtn onClick={addContent}>추가하기</S.SubmitBtn>
    </S.Fixed>
  );
};

export default AddData;
