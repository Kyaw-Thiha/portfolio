// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
//export const prerender = true;

import { projects } from '$lib/data/projects.ts';

/** @type {import('./$types').PageServerLoad} */
export const load = () => {
	return {
		projects: projects
	};
};
