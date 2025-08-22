import { cleanHtml } from '$lib/models-helpers';
import { array, nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const AcademicsCategory = partial(
	object({
		name: string('academic category has no name'),
		slug: string('academic category has no slug'),
		description: nullable(string('academic category has no description')),
		flexible_content: pipe(string('academic category has invalid content'), cleanHtml),
		background_image: nullable(string('academic category has no background image'))
	})
);

export const AcademicsCategories = array(AcademicsCategory);

export type AcademicsCategory = InferOutput<typeof AcademicsCategory>;
export type AcademicsCategories = InferOutput<typeof AcademicsCategories>;
