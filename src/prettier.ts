export default {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  endOfLine: 'lf',
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [{ files: '.prettierrc', options: { parser: 'json' } }],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
};
