/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const fs = require('fs');
const path = require('path');

const workspaces = fs.readdirSync(path.resolve(__dirname, '../'));
const currentWorkspace = path.basename(__dirname);

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
  watchFolders: workspaces
    .filter((f) => f !== currentWorkspace)
    .map((f) => path.join(__dirname, '../', f)),
};
