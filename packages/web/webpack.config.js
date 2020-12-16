const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
    },
  },
};
