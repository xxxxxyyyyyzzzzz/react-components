module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          parser: "typescript",
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          },
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/, /^@ts-.*/]
        }
      }
    ],
    enforce: "pre"
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
