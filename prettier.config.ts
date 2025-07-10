import { type Config } from 'prettier'

const config: Config = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
}

export default config
