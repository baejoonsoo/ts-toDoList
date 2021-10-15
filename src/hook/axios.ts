import axios, { Method } from 'axios';

const BASE_URL = 'http://localhost:4000/dataList/';

interface dataType {
  content?: string;
}

export const request = (url: string, method: Method, data: dataType) => {
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
