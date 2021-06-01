module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./App'],
          alias: {
            test: './test',
          },
        },
      ],
      [
        require.resolve('babel-plugin-inline-import'),
        {
          extensions: ['.svg'],
        },
      ],
    ],
  }
}
