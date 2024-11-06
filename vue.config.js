const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    );
  },
  publicPath: '/netflix-clone/', // 이 부분을 프로젝트 이름으로 설정
});
