import { cleanHtml } from '$lib/models-helpers';
import { nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const AlumniOverview = partial(
	object({
		flexible_content: pipe(string('alumni overview has invalid content'), cleanHtml),
		background_image: nullable(string('alumni overview has no background image'))
	})
);

export type AlumniOverview = InferOutput<typeof AlumniOverview>;
