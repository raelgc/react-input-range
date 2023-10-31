const path = require('path');

function configureKarma(config) {
  config.set({
    basePath: __dirname,
    browsers: ['ChromeHeadless'],
    coverageReporter: {
      reporters: [
        { type: 'html' },
        { type: 'text' },
      ],
    },
    frameworks: ['jasmine'],
    files: ['test/index.js'],
    preprocessors: {
      'src/index.js': ['coverage'],
      'test/index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      module: {
        rules: [
          {
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'test'),
            ],
            loader: 'babel-loader',
            options: {
              plugins: ['istanbul'],
            },
            test: /\.jsx?$/,
          },
          {
            include: path.resolve(__dirname, 'src'),
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader' },
            ],
            test: /\.scss$/,
          },
        ],
      },
      resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
      },
    },
  });
}

module.exports = configureKarma;
