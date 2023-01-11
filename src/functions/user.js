import axios from "axios";

export async function login(inputs, router) {
  console.log("in functions/users/login function", inputs)
  axios.get('/api/login')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}