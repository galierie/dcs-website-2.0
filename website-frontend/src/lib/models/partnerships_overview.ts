import { cleanHtml } from '$lib/models-helpers';
import { object, pipe, string, nullable, type InferOutput, partial } from 'valibot';

export const PartnershipsOverview = partial(
	object({
		flexible_content: pipe(string('partnerships overview has no content'), cleanHtml),
		background_image: nullable(string('partnerships overview has no background image'))
	})
);

export type PartnershipsOverview = InferOutput<typeof PartnershipsOverview>;
