import axios from "axios";

const url = "http://203.154.59.14:3000/api/v1";

export const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/register", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/login", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/users/" + id).then((res) => {
      resolve(res.data);
    });
  });
};

export const editUserById = (id, data) => {
  return new Promise((resolve, reject) => {
    axios.put(url + "/users/" + id, data).then((res) => {
      resolve(res.data);
    });
  });
};

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/products").then((res) => {
      resolve(res.data);
    });
  });
};

export const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/products", product).then((res) => {
      resolve(res.data);
    });
  });
};

export const editProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    axios.put(url + "/products/" + id, product).then((res) => {
      resolve(res.data);
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(url + "/products/" + id).then((res) => {
      resolve(res.data);
    });
  });
};
