const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hyemin-Youn.netflix-clone.github.io/' // 여기에 GitHub 저장소 이름을 정확히 입력하세요.
    : '/'
});
