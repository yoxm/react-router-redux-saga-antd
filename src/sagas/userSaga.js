import { put, fork, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { replace, goBack } from 'react-router-redux';
import * as action from '../actions/user';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from '../constant/actionType';
import { postLogin } from '../api/user';

function* postLoginWorker(payload) {
  try {
    const response = yield call(postLogin, payload);
    console.log(response);
    // yield put(replace('/'));
  } catch (error) {
    console.log(error);
    yield put(action.postLoginFailed(error));
  }
}

function* watchLogin() {
  while (true) {
    const { payload } = yield take(POST_LOGIN_REQUEST);
    yield fork(postLoginWorker, payload);
  }
}

export { watchLogin };
