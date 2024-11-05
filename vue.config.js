const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hyemin-Youn.netflix-clone.github.io/' // 실제 리포지토리 이름을 여기에 입력
    : '/'
});

