// 백엔드와 프론트 통신

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000", //서버 로컬호스트
      changeOrigin: true,
    })
  );
};
