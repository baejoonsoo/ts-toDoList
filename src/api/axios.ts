import axios, { Method } from 'axios';
import { dataListType } from '../interfaces/showList';

const BASE_URL = 'http://localhost:4000/dataList/';

interface dataType {
  content?: string;
  toDo?: boolean;
}

export const request = (url: string, method: Method, data: dataType): any => {
  return axios({
    method,
    url: BASE_URL + url,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
