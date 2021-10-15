import styled from 'styled-components';

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 40vh;
  border: black 2px solid;
  border-radius: 5px;
  padding: 20px;
`;

export const ContentInput = styled.input`
  height: 30px;
  outline: none;
  /* margin-bottom: 10px; */
`;

export const SubmitBtn = styled.button`
  border: black 1px solid;
  border-top: none;
  background-color: white;
`;
