import { cleanHtml } from '$lib/models-helpers';
import { array, nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const AboutPage = partial(
	object({
		title: string('about subpage has no title'),
		slug: string('about subpage has no slug'),
		flexible_content: pipe(string('about subpage has invalid content'), cleanHtml),
		background_image: nullable(string('about subpage has no background image'))
	})
);

export const AboutPages = array(AboutPage);

export type AboutPage = InferOutput<typeof AboutPage>;
export type AboutPages = InferOutput<typeof AboutPages>;
