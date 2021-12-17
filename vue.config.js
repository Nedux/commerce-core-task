module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        chaneOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
