import axios from "axios";

const url = "http://203.154.59.14:3000/api/v1";

export const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/register", user).then((res) => {
      resolve(res.data);
    });
  });
};
