/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	safelist: [
		'bg-gradient-to-r',
		'from-lime-400',
		'via-zinc-300',
		'to-rose-300',
		'bg-clip-text',
		'text-transparent',
		'drop-shadow-[1px_1px_0_#e5e7eb]',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans'],
			},
			dropShadow: {
				'soft-outline': '1px 1px 0 #e5e7eb',
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
}
