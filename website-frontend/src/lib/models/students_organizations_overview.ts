import { cleanHtml } from '$lib/models-helpers';
import { nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const StudentsOrganizationsOverview = partial(
	object({
		flexible_content: nullable(
			pipe(string('student organizations overview has invalid content'), cleanHtml)
		),
		background_image: nullable(string('student organizations overview has no background image'))
	})
);

export type StudentsOrganizationsOverview = InferOutput<typeof StudentsOrganizationsOverview>;
