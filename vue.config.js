const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',

  // 在 multi-page 模式下构建应用
  pages: {
    index: {
      entry: 'src/main',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'template',
    },
  },

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: !isProd,

  // 是否生成生产环境的 source map
  productionSourceMap: false,

  // webpack 链式配置
  chainWebpack: (config) => {
    config
      .when(isAnalyze, (conf) => {
        conf.plugin('bundle-analyzer').use(
          new BundleAnalyzerPlugin({
            analyzerPort: 8081,
          })
        );
      });
  },

  // 项目样式文件配置
  css: {
    sourceMap: !isProd,
  },

  // 开发服务器配置
  devServer: {
    port: 8080,
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
