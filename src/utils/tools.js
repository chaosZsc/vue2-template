import Vue from 'vue';

/**
 * 状态机参数重名检测
 *
 * @param {string} prefix - 前缀
 * @returns {Function} 前缀状态参数生成器
 */
export function makeConstCreator(prefix) {
  const constantList = [];
  return (constant) => {
    const s = `${prefix}/${constant}`;
    if (constantList.indexOf(s) !== -1) {
      throw new Error(`Duplicated store constants: ${s}`);
    } else {
      constantList.push(s);
      return s;
    }
  };
}

/**
 * 状态机更新
 *
 * @param {Object} state - 状态机
 * @param {Object} payload - 更新状态
 */
export function assignStoreState(state, payload) {
  Object.keys(payload).forEach((key) => {
    if (typeof payload[key] !== 'undefined') {
      if (state[key] !== payload[key]) {
        Vue.set(state, key, payload[key]);
      }
    }
  });
}

const defaultDuration = 1000;
/**
 * 手动延迟
 *
 * @param {number} [duration=defaultDuration]
 * @returns {Promise} 异步延迟
 */
export function delayPromise(duration = defaultDuration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
