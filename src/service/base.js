import axios from 'axios';
import statuses from 'statuses';

import apiConfig from './config';

// 接口实例
const apiInstance = axios.create(apiConfig);

// 请求拦截器
apiInstance.interceptors.request.use(
  (config) => {
    const { url } = config;
    if (!url) return Promise.reject(new Error('Missing Url'));

    return config;
  },
  (error) => Promise.reject(error)
);

// 返回拦截器
apiInstance.interceptors.response.use(
  (response) => {
    const { status, statusText, data } = response;
    if (status !== statuses('ok')) return Promise.reject(new Error(statusText || statuses(status)));

    return data;
  },
  (error) => Promise.reject(error)
);

/**
 * 基础接口
 *
 * @param {Object} config - 接口参数
 * @param {string} [config.url] - 接口地址
 * @param {string} [config.method=get] - 请求方式
 * @param {string} [config.baseURL] - 基础地址
 * @param {Object} [config.headers] - 请求头
 * @param {Object} [config.params] - 请求链接参数
 * @param {Function} [config.paramsSerializer] - 请求链接参数转换
 * @param {Object} [config.data] - 请求体参数
 * @param {number} [config.timeout] - 超时时间
 * @param {string} [config.timeoutErrorMessage] - 超时报错消息
 * @returns {Promise} 接口返回内容
 */
const apiFetch = (config) => apiInstance(config).then((res) => res.data);

export default apiFetch;
