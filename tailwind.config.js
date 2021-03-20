const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./public/**/*.html',
		'./public/**/*.{js,jsx}'
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		customForms: (theme) => ({
			default: {
				'input, textarea': {
					'&::placeholder': {
						color: theme('colors.gray.400'),
					},
				},
			},
		}),
		extend: {
			colors: {
				primary: colors.purple,
				teal: colors.teal,
				orange: colors.orange,
				coolGray: colors.coolGray
			},
			maxHeight: {
				xl: '36rem',
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: [
				'hover',
				'focus',
				'active',
				'odd',
				'dark',
			],
			display: ['responsive', 'dark'],
			textColor: [
				'focus-within',
				'hover',
				'active',
				'dark',
			],
			placeholderColor: ['focus', 'dark'],
			borderColor: ['focus', 'hover', 'dark'],
			divideColor: ['dark'],
			boxShadow: ['focus'],
		},
	},
	plugins: [
		require('@tailwindcss/jit'),
		require('@tailwindcss/forms'),
	],
}
