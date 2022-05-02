module.exports = {
	theme: {
		fontFamily: {
			sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			colors: {
				"zad-blue": {
					100: "#cacbe2",
					200: "#b1b3d3",
					300: "#989cc4",
					400: "#6972a6",
					500: "#3e4f8b",
					600: "#123274",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
	content: ["src/**/*.njk", "src/**/*.js"],
};
