import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from '../constant/actionType';

export const postLoginSuccess = payload => {
  return { type: POST_LOGIN_SUCCESS, payload };
};

export const postLoginFailed = payload => {
  return { type: POST_LOGIN_FAILED, payload };
};

export const postLoginRequest = payload => {
  return { type: POST_LOGIN_REQUEST, payload };
};
