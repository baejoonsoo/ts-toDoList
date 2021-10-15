import { useState } from 'react';
import { request } from '../hook/axios';
import * as S from './style';

const AddData = () => {
  const [content, setContent] = useState<string>('');
  const changeContent = (e: any) => {
    setContent(e.target.value);
    console.log(content);
  };

  const addContent = () => {
    request('', 'post', {
      content: content,
    }).then((res) => {
      alert('목록이 추가되었습니다');
    });
  };

  return (
    <S.Fixed>
      <S.ContentInput
        maxLength={20}
        placeholder="최대 20글자"
        value={content}
        onChange={changeContent}
      />
      <S.SubmitBtn onClick={addContent}>추가하기</S.SubmitBtn>
    </S.Fixed>
  );
};

export default AddData;
