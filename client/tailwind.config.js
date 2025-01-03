/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(43, 108, 176, 0.3)), url('./src/assets/images/img-1.jpg')",
				"service-pattern": "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(43, 108, 176, 0.9)), url('./src/assets/images/img-5.jpg')",
				"gallery-pattern1": "url('./src/assets/images/img-12.jpg')",
				"gallery-pattern2": "url('./src/assets/images/img-14.jpg')",
				"gallery-pattern3": "url('./src/assets/images/img-19.jpg')",
				"gallery-pattern4": "url('./src/assets/images/img-16.jpg')",
				"gallery-pattern5": "url('./src/assets/images/img-17.jpg')",
				"footer-pattern": "linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./src/assets/images/img-7.jpg')",
			},
		},
	},
	plugins: [],
};
