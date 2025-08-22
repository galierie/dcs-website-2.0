import { cleanHtml } from '$lib/models-helpers';
import { array, boolean, nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const MiscellaneousPage = partial(
	object({
		title: string('miscellaneous page has no title'),
		slug: string('miscellaneous page has no slug'),
		is_on_nav: boolean('miscellaneous page has no nav status'),
		flexible_content: pipe(string('miscellaneous page has invalid content'), cleanHtml),
		background_image: nullable(string('miscellaneous page has no background image'))
	})
);

export const MiscellaneousPages = array(MiscellaneousPage);

export type MiscellaneousPage = InferOutput<typeof MiscellaneousPage>;
export type MiscellaneousPages = InferOutput<typeof MiscellaneousPages>;
