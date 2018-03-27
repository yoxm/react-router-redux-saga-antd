import { get, post } from '../utils/http';
export const postLogin = payload => {
  console.log(payload, );
  const { userName, password } = payload;
  post('http://localhost:3001/api/login', {
    username: userName,
    password: password,
  }).then(res => {
    console.log(res, '22');
  });
};
