import axios from "axios";
import { getCookie } from "./util";

export async function login(inputs, router) {
  axios({
    method: 'post',
    url: '/api/login',
    data: JSON.stringify(inputs)
  })
    .then(function (response) {
      document.cookie = `token=${response.data.Token}`;
    })
    .catch(function (error) {
      console.log("login response fail:", error);
    });
}

export async function changeAccountInfo() {//discard after finishing reset password function
  axios({
    method: 'post',
    url: '/api/account',
    data: {
      password: "11111111"
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function verifyToken() {//discard after finishing member function
  axios({
    method: 'get',
    url: '/api/testauth',
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}