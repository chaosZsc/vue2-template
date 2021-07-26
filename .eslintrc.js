const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    /** Possible Errors */
    // 禁用 console
    'no-console': isProd ? ['error', { allow: ['warn', 'error'] }] : 'off',
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'error',
    // 禁止在 if-else-if 链中使用重复条件
    'no-dupe-else-if': 'error',

    /** Best Practices */
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'error',
    // 指定程序中允许的最大环路复杂度
    complexity: ['error', { max: 20 }],
    // 禁用 alert、confirm 和 prompt
    'no-alert': isProd ? 'error' : 'off',
    // 禁用魔术数字
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1], ignoreArrayIndexes: true }],
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for Vue state
          'vm', // for Vue instance
        ],
      },
    ],

    /** Strict Mode */

    /** Variables */
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': ['error', { allow: ['state'] }],

    /** Node.js and CommonJS */

    /** Stylistic Issues */
    // 要求或禁止使用命名的 function 表达式
    'func-names': 'error',
    // 强制一行的最大长度
    'max-len': [
      'error',
      200,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    /** ECMAScript 6 */
    // 禁止重复导入
    'no-duplicate-imports': 'error',

    /** Import */
    // 要求或禁止使用文件后缀名
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
};
