import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from '../constant/actionType';
const initialUserState = {
  userInfo: {
    username: 'Yoyo',
    isLoading: false,
  },
};

const userReducer = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return { ...state, userInfo: { ...state.userInfo, isLoading: true } };
    default:
      return state;
  }
};

export default userReducer;
