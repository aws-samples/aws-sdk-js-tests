/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  projectRoot: __dirname,
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, `node_modules/${name}`),
      },
    ),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname, '../')],
};
