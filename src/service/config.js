import qs from 'query-string';

// 接口实例默认配置
export default {
  method: 'get',
  baseURL: undefined,
  timeout: undefined,
  timeoutErrorMessage: 'Request Timeout',
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'comma' });
  },
};
