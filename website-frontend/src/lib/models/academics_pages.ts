import { cleanHtml } from '$lib/models-helpers';
import {
	array,
	lazy,
	nullable,
	object,
	partial,
	pipe,
	string,
	union,
	type InferOutput
} from 'valibot';
import { AcademicsCategory } from './academics_categories';

export const AcademicsPage = partial(
	object({
		title: string('academic subpage has no title'),
		slug: string('academic subpage has no slug'),
		category: nullable(union([string(), lazy(() => AcademicsCategory)])),
		flexible_content: pipe(string('academic subpage has invalid content'), cleanHtml)
	})
);

export const AcademicsPages = array(AcademicsPage);

export type AcademicsPage = InferOutput<typeof AcademicsPage>;
export type AcademicsPages = InferOutput<typeof AcademicsPages>;
