import axios from 'axios';
import message from 'antd';

let axiosIns = axios.create({
  timeout: 60000,
  headers: {
    withCredentials: true,
  },
});

// 添加请求拦截器
axiosIns.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  res => {
    if (!res.data || res.status !== 200) {
      return Promise.reject(res);
    }
    return res;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求';
          break;
        case 401:
          err.message = '未授权，请重新登录';
          break;
        case 403:
          err.message = '拒绝访问,请登录后重试';
          break;
        case 404:
          err.message = '请求错误,未找到该资源';
          break;
        case 405:
          err.message = '请求方法未允许';
          break;
        case 408:
          err.message = '请求超时';
          break;
        case 500:
          err.message = '服务器端出错';
          break;
        case 501:
          err.message = '网络未实现';
          break;
        case 502:
          err.message = '网络错误';
          break;
        case 503:
          err.message = '服务不可用';
          break;
        case 504:
          err.message = '网络超时';
          break;
        case 505:
          err.message = 'http版本不支持该请求';
          break;
        default:
          err.message = `连接错误:${err.response.status}`;
      }
    } else {
      err.message = '连接到服务器失败';
    }
    return Promise.resolve(err.response);
  }
);

/**
 * 发起AJAX GET请求
 * @author Yoyo
 * @param {String} url
 * @param {Object} params
 * @returns {Promise} promise对象
 */
export const get = (url, params, options) => {
  return new Promise((resolve, reject) => {
    axiosIns['get'](url, { params: params }, options)
      .then(response => {
        if (response && response.data && response.status === 200) {
          resolve(response.data);
        }
      })
      .catch(err => {
        console.error(`访问${url}失败, 原因为==>`, err);
      });
  });
};

export const post = (url, params, options) => {
  return new Promise((resolve, reject) => {
    axiosIns['post'](url, params, options)
      .then(response => {
        if (response && response.data && response.status === 200) {
          resolve(response.data);
        }
      })
      .catch(err => {
        console.error(`访问${url}失败, 原因为==>`, err);
      });
  });
};
