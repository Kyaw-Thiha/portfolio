/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				card: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
			}
		}
	},
	plugins: []
};
