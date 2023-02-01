import adapter from '@sveltejs/adapter-netlify';
import preprocessor from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: { prependData: '@use "static/sass/abstracts" as * ;' }
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
