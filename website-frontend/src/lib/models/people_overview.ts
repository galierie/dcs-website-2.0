import { cleanHtml } from '$lib/models-helpers';
import { nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const PeopleOverview = partial(
	object({
		flexible_content: nullable(pipe(string('people overview has no content'), cleanHtml)),
		background_image: nullable(string('people overview has no background image'))
	})
);

export type PeopleOverview = InferOutput<typeof PeopleOverview>;
