import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';

export const load = (({ params }) => {
	return {
		project: projects.find((obj) => {
			return obj.name === params.slug;
		})
	};
}) satisfies PageLoad;
