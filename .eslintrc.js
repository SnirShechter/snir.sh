module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	plugins: ['gridsome'],
	env: {
		node: true,
	},
	extends: [
		'plugin:gridsome/recommended',
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
		'@vue/prettier',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 4,
				printWidth: 120,
				endOfLine: 'auto',
			},
		],
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
}
