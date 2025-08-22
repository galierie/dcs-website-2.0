import { cleanHtml } from '$lib/models-helpers';
import { array, nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const PeopleCategory = partial(
	object({
		title: string('people category has no title'),
		flexible_content: nullable(pipe(string('people category has no content'), cleanHtml)),
		background_image: nullable(string('people category has no background image'))
	})
);

export const PeopleCategories = array(PeopleCategory);

export type PeopleCategory = InferOutput<typeof PeopleCategory>;
export type PeopleCategories = InferOutput<typeof PeopleCategories>;
