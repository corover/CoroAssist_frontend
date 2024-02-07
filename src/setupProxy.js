const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/nodeApi",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^nodeApi": "" },
    })
  );

  app.use(
    "/selfonboardAPI",
    createProxyMiddleware({
      target: "http://192.46.213.46:8082",
      secure: false,

      changeOrigin: true,

      logLevel: "debug",

      pathRewrite: {
        "^selfonboardAPI": "",
      },
    })
  );
};
