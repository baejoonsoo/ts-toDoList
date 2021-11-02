import styled from 'styled-components';

export const WordBox = styled.div`
  border: black 1px solid;
  display: flex;
  width: 30vw;
  flex-direction: row;
`;

export const ToDocheck = styled.div`
  flex: auto;
`;

export const EvBtn = styled.button`
  text-align: center;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  border: white 1px solid;
  border-left: black 1px solid;
  background-color: white;
  outline: 0;
  color: red;
`;

export const T = styled.div`
  display: inline-flex;
  margin: 0px;
  margin-right: 10px;
  padding-right: 1px;
  border-right: 1px black solid;
`;

//showList.jsx
export const Main = styled.main`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(3, 1fr);
`;
