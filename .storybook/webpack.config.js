const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: { setDisplayName: false },
      },
    ],
  })

  config.module.rules.push({
    test: /\.(story|stories)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          // parser: 'typescript',
          prettierConfig: {
            printWidth: 100,
            singleQuote: false,
          },
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/, /^@ts-.*/],
        },
      },
    ],
    // loaders: [
    //   {
    //     loader: [
    //       require.resolve('@storybook/source-loader'),
    //       require.resolve('react-docgen-typescript-loader'),
    //     ],
    //     options: {
    //       parser: 'typescript',
    //       prettierConfig: {
    //         printWidth: 100,
    //         singleQuote: false,
    //       },
    //       uglyCommentsRegex: [/^eslint-.*/, /^global.*/, /^@ts-.*/],
    //     },
    //   },
    // ],
    enforce: 'pre',
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../node_modules/normalize-scss/sass')],
            fiber: require('fibers'),
          },
        },
      },
    ],
  })

  config.resolve.alias['-'] = path.resolve(__dirname, '../src')
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
