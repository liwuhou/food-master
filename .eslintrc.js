// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    node: true,
  },
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: ['error', 'single', 'avoid-escape'],
    semi: 'off',
  },
}
