import { cleanHtml } from '$lib/models-helpers';
import { array, nullable, object, partial, pipe, string, type InferOutput } from 'valibot';

export const StudentsPage = partial(
	object({
		title: string('student subpage has no title'),
		slug: string('student subpage has no slug'),
		flexible_content: pipe(string('student subpage has no flexible content'), cleanHtml),
		background_image: nullable(string('student subpage has no background image'))
	})
);

export const StudentsPages = array(StudentsPage);

export type StudentsPage = InferOutput<typeof StudentsPage>;
export type StudentsPages = InferOutput<typeof StudentsPages>;
