import axios, { Method } from "axios";

const BASE_URL = "http://localhost:4000/dataList";

interface dataType {
  content?: string;
}

export const request = (method: Method, data: dataType) => {
  return axios({
    method,
    url: BASE_URL,
    data,
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
