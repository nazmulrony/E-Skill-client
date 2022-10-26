/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: "#0D9488",
				secondary: "#061d1c",
				darkTeal: "#031514",
				dimTeal: "#bae1db",
				light: "#F8FAFC",
				pine: "#027e73"
			},
			fontFamily: {
				poppins: "'Poppins', 'sans-serif'",
			},

		},
	},
	plugins: [require("daisyui"), require('flowbite/plugin')],
}