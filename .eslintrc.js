module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  'env': {
    browser: true,
    node: true
  },
  // add your custom rules here
  'rules': {
    'global-require': 0,

    'no-alert': 0,

    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    'indent': 0,
    'arrow-parens': 0,

    'import/no-unresolved': 0,
    'import/imports-first': 0,

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
