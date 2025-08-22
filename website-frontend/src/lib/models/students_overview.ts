import { cleanHtml } from '$lib/models-helpers';
import { nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const StudentsOverview = partial(
	object({
		flexible_content: pipe(string('student overview has no flexible content'), cleanHtml),
		background_image: nullable(string('student overview has no background image'))
	})
);

export type StudentsOverview = InferOutput<typeof StudentsOverview>;
